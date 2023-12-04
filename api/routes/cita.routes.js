const express = require("express");
const router = express.Router();
const { Citas, User, Properties } = require("../models/");
const transporter = require("../configs/mailer");
router.post("/reservar", async (req, res) => {
  try {
    const { hora, fecha, userId, edificioId } = req.body;

    console.log("REQ BODYYYY", req.body);
    console.log("USER ID", userId);

    const citaExistente = await Citas.findOne({
      where: { hora, fecha, userId, edificioId },
    });

    if (citaExistente) {
      return res.status(409).json({ error: "Fecha no disponible" });
    }
    const user = await User.findByPk(userId);
    const edificio = await Properties.findByPk(edificioId);
    if (!edificio || !user) {
      throw new Error("Edifico o Usuario no existen");
    }
    const nuevaCita = await Citas.create({
      hora,
      fecha,
    });

    nuevaCita.setUser(user);
    nuevaCita.setEdificio(edificio);

    await transporter.sendMail(
      {
        from: '"Inmobiliaria HOD 🏠" <inmobiliariaHOD@gmail.com>',
        to: user.email,
        subject: "Hello ✔",
        html: `<p> ¡Hola, ${user.name}! Su cita para el ${fecha} a las ${hora} ha sido confirmada con éxito.</p>`, // html body
      },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );

    res
      .status(201)
      .json({ mensaje: "Cita reservada con éxito", data: nuevaCita });
  } catch (error) {
    console.log("Error en las citas", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    citas = await Citas.findAll({
      include: [{ model: User }, { model: Properties }],
    });
    res.send(citas);
  } catch (error) {
    console.log("ERROOOOR EN CITAS", error);
  }
});

module.exports = router;
