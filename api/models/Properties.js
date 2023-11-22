const { Model, DataTypes } = require("sequelize");

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
      type: DataTypes.DECIMAL(10, 2),
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

// Ejemplo de creación de 30 edificios ficticios en Buenos Aires

module.exports = Properties;
