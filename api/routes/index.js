const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  console.log("BODY", req.body);
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
