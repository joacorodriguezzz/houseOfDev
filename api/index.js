const express = require("express");
const app = express();

const morgan = require("morgan");
const db = require("./configs/db");
const models = require("./models");
const Register = require("../front/src/Register");

app.use(express.json());
app.use(morgan("dev"));

const bodyParser = require("body-parser");
const User = require("./models/User");

app.get("/", function (req, res) {
  res.send("hola");
});

app.get("/register", function (req, res) {
  res.send("Formulario register");
});

/*
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ where: { email } }).then((usuarioExiste) => {
    if (usuarioExiste) {
      return res.status(400).json({ message: "el usuario ya existe" });
    }
    return User.create({
      name,
      email,
      password,
    });
  });

  res.status(200).json({ message: "Registro exitoso" });
});
*/

db.sync({ force: false })
  .then(function () {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);
