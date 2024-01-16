const nodemailer = require("nodemailer");
require("dotenv").config()

const {EMAIL, 
  PASSWORD} = process.env
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for sending emails");
  })
  .catch((error) => {
    console.error("Error verifying transporter:", error);
  });
module.exports = transporter;
