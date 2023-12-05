const express = require("express");
const router = express.Router();
const { User } = require("../models/");
const { generateToken } = require("../configs/tokens");
const { validateAuth } = require("../middleware/auth");
const { validateToken } = require("../configs/tokens");

router.post("/register", (req, res) => {
  const { email, name, password, lastName } = req.body;

  User.findOne({ where: { email } }).then((userExist) => {
    if (userExist) {
      return res.status(400).json({ error: "El usuario ya existe" });
    }

    User.create({
      email,
      name,
      password,
      lastName,
      isAdmin: false,
    })
      .then((user) => {
        console.log("USER", user);
        res.status(201).send(user);
      })
      .catch((error) => {
        console.error(
          "Error al crear usuario:",
          error,
          "APELLIDOOOO",
          lastName
        );
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
        lastName: user.lastName,
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

router.put("/profile", validateAuth, (req, res) => {
  const userId = req.user.id;
  const { name, lastName } = req.body;
  console.log(name);

  User.findByPk(userId)
    .then((user) => {
      console.log(user);
      if (!user) {
        return res.status(400);
      }
      user.lastName = lastName;
      user.name = name;
      return user.save();
    })
    .then((updateUser) => {
      res.status(200).json(updateUser);
    });
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
