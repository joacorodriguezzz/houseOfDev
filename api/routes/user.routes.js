const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../configs/tokens");
const { validateAuth } = require("../middleware/auth");
const { validateToken } = require("../configs/tokens");

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
      isAdmin: false,
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

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    console.log("aca está el error");
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      console.log("aca está el error33");

      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      };
      const token = generateToken(payload);

      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.get("/user/profile", (req, res) => {});

router.put("/user/profile", (req, res) => {});

router.get("/user/favoritos", (req, res) => {});

router.post("/user/favoritos", (req, res) => {});

router.delete("/user/favoritos/:propiedadesId", (req, res) => {});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
