const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Properties = require("../models/Properties");

router.post("/register", (req, res) => {
  const { email, name, password } = req.body;

  User.findOne({ where: { email } }).then((userExist) => {
    if (userExist) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    User.create({
      email,
      name,
      password,
      isAdmin: true,
    })
      .then((user) => {
        console.log("USER", user);
        res.status(201).send(user);
      })
      .catch((error) => {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
      });
  });
});

router.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      console.log("No hay usuarios", error);
    });
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findOne({ where: { id: userId } }).then((user) => {
    if (!user) {
      return res.status(204).send("Usuario no encontrado");
    }
    res.status(200).send(user);
  });
});

router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  User.findOne({ where: { id: userId } })
    .then((user) => {
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      return User.destroy({ where: { id: userId } });
    })
    .then(() => {
      res.status(204).send();
    });
});

module.exports = router;
