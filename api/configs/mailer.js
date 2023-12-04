const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sosafrancisco2005@gmail.com",
    pass: "ytftovsnnsvejpbf",
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Email listo para enviar");
  })
  .catch((error) => {
    console.log("ERROR EMAIL", error);
  });

module.exports = transporter;
