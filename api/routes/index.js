const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const propertiesRoutes = require("./properties.routes");
const adminRoutes = require("./admin.routes");

router.use("/user", userRoutes);
router.use("/properties", propertiesRoutes);
router.use("/admin", adminRoutes);
module.exports = router;
