const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./configs/db");
const models = require("./models");

app.use(express.json());
app.use(morgan("dev"));

db.sync({ force: false })
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch(console.error);
