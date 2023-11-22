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

/*
router.post("/register", (req, res) => {
  User.findOne({ email }).then((userExist) => {
    if (userExist) {
      return res.status(400).json({ error: "el usuario ya existe" });
    }
  });

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
*/
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
      res.send({ user: payload, token });
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

// ||||||| PROPIEDADES ||||||||||

router.get("/propiedades", (req, res) => {});
router.get("/propiedades/:id", (req, res) => {});
router.post("/propiedades", (req, res) => {});
router.put("/propiedades/:id", (req, res) => {});
router.delete("/propiedades/:id", (req, res) => {});

// |||||||||||||||||||||||||

// |||| USER RUTAS ||||

// Perfil de Usuario
router.get("/user/profile", (req, res) => {});

router.put("/user/profile", (req, res) => {});

router.get("/user/favoritos", (req, res) => {});

router.post("/user/favoritos", (req, res) => {});

router.delete("/user/favoritos/:propiedadesId", (req, res) => {});

/* 
|||| ADMIN RUTAS ||||

Panel de Admin: /admin/dashboard
PropiedadesAdmin: admin/properties

*/

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
