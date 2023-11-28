const express = require("express");
const router = express.Router();
const Citas = require("../models/Citas");

router.post("/reservar", (req, res) => {
  const { horaCita, diaCita } = req.body;
  console.log("REQ BODYYYY", req.body);

  Citas.findOne({
    where: { horaCita, diaCita },
  }).then((citaExistente) => {
    if (citaExistente) {
      res.status(409).json({ error: "Fecha no disponible" });
    } else {
      Citas.create({
        horaCita,
        diaCita,
      })
        .then((nuevaCita) => {
          res.status(201).json({ mensaje: "Cita reservada con éxito" });
        })
        .catch((error) => {
          console.log("Error en las citas", error);
          res.status(500).json({ error: "Error al reservar la cita" });
        });
    }
  });
});

module.exports = router;
