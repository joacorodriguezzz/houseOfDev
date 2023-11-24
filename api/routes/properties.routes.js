const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Properties = require("../models/Properties");

router.get("/propiedades", (req, res) => {});
router.get("/propiedades/:id", (req, res) => {});
router.post("/propiedades", (req, res) => {});
router.put("/propiedades/:id", (req, res) => {});
router.delete("/propiedades/:id", (req, res) => {});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
