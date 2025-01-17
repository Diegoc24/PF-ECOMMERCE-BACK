const {putControllerProduct, putValorations, putStock, putEditValoration, putFavorites} = require("../controllers/putControllerProduct");

const putHandlerProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const dataModify = req.body;
        
        let indicador;
        let productModified;
        for(bandera in dataModify){
            if(bandera == 'valorations'){
                
                indicador = await putValorations(id,dataModify.valorations)
            }else if(bandera == 'stock'){
               
                indicador = await putStock(id, dataModify.stock);
            }else if(bandera == "edit"){
               
                indicador = await putEditValoration(id, dataModify.edit)
            }else if(bandera == "favorites"){
                indicador = await putFavorites(id, dataModify.favorites)
            }
        }

        if(!indicador) productModified = await putControllerProduct(id, dataModify);

        res.status(200).json({ msg:"Data Modified Succesfull"});
    } catch (error) {
        res.status(400).json({ err:error.message });
    }
};

module.exports = putHandlerProduct;