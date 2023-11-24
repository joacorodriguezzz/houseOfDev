const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Properties = require("../models/Properties");

router.get("/propiedades", (req, res) => {});
router.get("/propiedades/:id", (req, res) => {});
router.post("/crearPropiedad", (req, res) => {
  const {
    cantidadAmbientes,
    ubicacion,
    barrio,
    coordeanadas,
    precio,
    baños,
    metrosCuadrados,
  } = req.body;

  Properties.create({
    cantidadAmbientes,
    ubicacion,
    barrio,
    coordeanadas,
    precio,
    baños,
    metrosCuadrados,
  })
    .then((newPropiedad) => {
      res.status(201).send(newPropiedad);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});
router.put("/propiedades/:id", (req, res) => {});
router.delete("/propiedades/:id", (req, res) => {});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
