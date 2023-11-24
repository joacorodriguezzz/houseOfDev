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

module.exports = router;
