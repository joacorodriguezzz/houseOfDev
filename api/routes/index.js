const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../configs/tokens");
const { validateAuth } = require("../middleware/auth");
const { validateToken } = require("../configs/tokens");

router.post("/register", (req, res) => {
  User.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    isAdmin: false,
  }).then((user) => {
    console.log("USER", user);

    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
      };
      const token = generateToken(payload);

      res.cookie("token", token);
      res.send(payload);
    });
  });
});

router.get("/home", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
