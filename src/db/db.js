const mongoose = require("mongoose");
require("dotenv").config();
const { DB_UIL } = process.env;

module.exports = () => {
  const connect = () => {
    mongoose.connect(DB_UIL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {  
          version: '1',
          strict: true,
          deprecationErrors: true,
      }
  })
  .then(() => console.log('Conexión con éxito a la DB'))
  .catch(error => console.error('Error al conectar a la DB', error));
  };

  connect();
};
