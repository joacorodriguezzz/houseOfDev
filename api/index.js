const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Escuchando al puerto 3000");
});
