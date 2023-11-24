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
    coordenadas: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    baños: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    metrosCuadrados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "edificio",
  }
);

module.exports = Properties;
