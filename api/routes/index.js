const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { generateToken } = require("../configs/tokens");

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
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

router.get("/home", (req, res) => {
  const user = {
    name: "fran",
  };
  res.send({ user });
});
/*
router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

*/
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
