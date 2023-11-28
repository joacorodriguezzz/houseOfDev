const { Model, DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

class Citas extends Model {}

Citas.init(
  {
    horaCita: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diaCita: {
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
