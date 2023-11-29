const { Model, DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

class Citas extends Model {}

Citas.init(
  {
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "citas",
  }
);

module.exports = Citas;
