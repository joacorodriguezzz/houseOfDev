const { Model, DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

class Properties extends Model {}

Properties.init(
  {
    cantidadAmbientes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    barrio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    baños: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    metrosCuadrados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "edificios",
  }
);

module.exports = Properties;
