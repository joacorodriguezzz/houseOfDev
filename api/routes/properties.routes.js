const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Properties = require("../models/Properties");

router.get("/propiedades", (req, res) => {
  Properties.findAll()
    .then((properties) => {
      res.status(200).send(properties);
    })
    .catch((error) => {
      console.log("Error:", error);
      res.status(500).send({ error: "error" });
    });
});
router.get("/propiedades/:id", (req, res) => {
  const propertyId = req.params.id;

  Properties.findOne({ where: { id: propertyId } })
    .then((property) => {
      if (!property) {
        return res.status(404).json({ error: "Propiedad no encontrada" });
      }

      res.send(property);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});
router.post("/crearPropiedad", (req, res) => {
  const {
    cantidadAmbientes,
    ubicacion,
    barrio,
    coordenadas,
    precio,
    baños,
    metrosCuadrados,
  } = req.body;

  Properties.create({
    cantidadAmbientes,
    ubicacion,
    barrio,
    coordenadas,
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

router.delete("/propiedades/:id", (req, res) => {
  const propertyId = req.params.id;

  Properties.findOne({ where: { id: propertyId } })
    .then((property) => {
      if (!property) {
        return res.status(404).send("propiedad no encontrada");
      }

      return Properties.destroy({ where: { id: propertyId } });
    })
    .then(() => {
      res.status(204).send();
    });
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
