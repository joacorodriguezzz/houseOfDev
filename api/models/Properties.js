const { Model, DataTypes } = require("sequelize");

class Edificio extends Model {}

Edificio.init(
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
const edificiosFicticios = [
  (Depto1 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Palermo",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 1,
    metrosCuadrados: 80,
    img: "https://static.tokkobroker.com/pictures/51990735984771874528667861652741616063490920355630325478309554924088416936536.jpg",
  }),
  (Depto2 = {
    cantidadAmbientes: 4,
    ubicacion: "Calle Falsa 3121",
    barrio: "Caballito",
    coordenadas: "-34.5764, -53.8289",
    precio: 230000.0,
    baños: 2,
    metrosCuadrados: 120,
  }),
  (Depto3 = {
    cantidadAmbientes: 1,
    ubicacion: "Calle Falsa 1111",
    barrio: "Belgrano",
    coordenadas: "-34.3264, -21.4749",
    precio: 80000.0,
    baños: 1,
    metrosCuadrados: 35,
  }),
  (Depto4 = {
    cantidadAmbientes: 1,
    ubicacion: "Calle Falsa 131",
    barrio: "Once",
    coordenadas: "-34.3424, -51.2349",
    precio: 45000.0,
    baños: 1,
    metrosCuadrados: 40,
  }),
  (Depto5 = {
    cantidadAmbientes: 6,
    ubicacion: "Calle Falsa 2005",
    barrio: "Recoleta",
    coordenadas: "-31.3944, -13.4229",
    precio: 500000.0,
    baños: 4,
    metrosCuadrados: 300,
  }),
  (Depto6 = {
    cantidadAmbientes: 4,
    ubicacion: "Calle Falsa 211",
    barrio: "Caballito",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 2,
    metrosCuadrados: 95,
  }),
  (Depto7 = {
    cantidadAmbientes: 5,
    ubicacion: "Calle Falsa 43",
    barrio: "Villa Luro",
    coordenadas: "-34.5764, -67.4249",
    precio: 350000.0,
    baños: 3,
    metrosCuadrados: 180,
  }),
  (Depto8 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 1233",
    barrio: "Retiro",
    coordenadas: "-34.5764, -58.4249",
    precio: 70000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto9 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 11223",
    barrio: "Palermo",
    coordenadas: "-43.6764, -58.4249",
    precio: 100000.0,
    baños: 1,
    metrosCuadrados: 75,
  }),
  (Depto10 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Boedo",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto11 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 123",
    barrio: "Balvanera",
    coordenadas: "-34.5764, -58.4249",
    precio: 200000.0,
    baños: 2,
    metrosCuadrados: 100,
  }),
  (Depto12 = {
    cantidadAmbientes: 6,
    ubicacion: "Calle Falsa 123",
    barrio: "Puerto Madero",
    coordenadas: "-34.5764, -58.4249",
    precio: 600000.0,
    baños: 4,
    metrosCuadrados: 180,
  }),
  (Depto13 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 123",
    barrio: "San Cristobal",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 2,
    metrosCuadrados: 63,
  }),
  (Depto14 = {
    cantidadAmbientes: 1,
    ubicacion: "Calle Falsa 123",
    barrio: "Barracas",
    coordenadas: "-34.5764, -58.4249",
    precio: 75000.0,
    baños: 1,
    metrosCuadrados: 45,
  }),
  (Depto15 = {
    cantidadAmbientes: 1,
    ubicacion: "Calle Falsa 123",
    barrio: "Montserrat",
    coordenadas: "-34.5764, -58.4249",
    precio: 50000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto16 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Flores",
    coordenadas: "-34.5764, -58.4249",
    precio: 99000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto17 = {
    cantidadAmbientes: 4,
    ubicacion: "Calle Falsa 123",
    barrio: "Caballito",
    coordenadas: "-34.5764, -58.4249",
    precio: 250000.0,
    baños: 3,
    metrosCuadrados: 120,
  }),
  (Depto17 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Palermo",
    coordenadas: "-34.5764, -58.4249",
    precio: 150000.0,
    baños: 1,
    metrosCuadrados: 90,
  }),
  (Depto18 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 123",
    barrio: "Bajo Flores",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto19 = {
    cantidadAmbientes: 4,
    ubicacion: "Calle Falsa 123",
    barrio: "Recoleta",
    coordenadas: "-34.5764, -58.4249",
    precio: 320000.0,
    baños: 3,
    metrosCuadrados: 155,
  }),
  (Depto20 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 123",
    barrio: "Almagro",
    coordenadas: "-34.5764, -58.4249",
    precio: 150000.0,
    baños: 2,
    metrosCuadrados: 90,
  }),
  (Depto21 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Lugano",
    coordenadas: "-34.5764, -58.4249",
    precio: 90000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto22 = {
    cantidadAmbientes: 5,
    ubicacion: "Calle Falsa 123",
    barrio: "Liniers",
    coordenadas: "-34.5764, -58.4249",
    precio: 270000.0,
    baños: 3,
    metrosCuadrados: 170,
  }),
  (Depto23 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Parque Chacabuco",
    coordenadas: "-34.5764, -58.4249",
    precio: 82000.0,
    baños: 1,
    metrosCuadrados: 71,
  }),
  (Depto24 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Parque Patricios",
    coordenadas: "-34.5764, -58.4249",
    precio: 70000.0,
    baños: 1,
    metrosCuadrados: 35,
  }),
  (Depto25 = {
    cantidadAmbientes: 4,
    ubicacion: "Calle Falsa 123",
    barrio: "Flores",
    coordenadas: "-34.5764, -58.4249",
    precio: 200000.0,
    baños: 2,
    metrosCuadrados: 140,
  }),
  (Depto26 = {
    cantidadAmbientes: 3,
    ubicacion: "Calle Falsa 123",
    barrio: "Palermo",
    coordenadas: "-34.5764, -58.4249",
    precio: 140000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto27 = {
    cantidadAmbientes: 1,
    ubicacion: "Calle Falsa 123",
    barrio: "Palermo",
    coordenadas: "-34.5764, -58.4249",
    precio: 90000.0,
    baños: 1,
    metrosCuadrados: 45,
  }),
  (Depto28 = {
    cantidadAmbientes: 6,
    ubicacion: "Calle Falsa 123",
    barrio: "Belgrano",
    coordenadas: "-34.5764, -58.4249",
    precio: 400000.0,
    baños: 4,
    metrosCuadrados: 200,
  }),
  (Depto29 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Congreso",
    coordenadas: "-34.5764, -58.4249",
    precio: 120000.0,
    baños: 1,
    metrosCuadrados: 80,
  }),
  (Depto30 = {
    cantidadAmbientes: 2,
    ubicacion: "Calle Falsa 123",
    barrio: "Barracas",
    coordenadas: "-34.5764, -58.4249",
    precio: 85000.0,
    baños: 1,
    metrosCuadrados: 60,
  }),
  // Agrega más edificios aquí...
];

module.exports = edificiosFicticios;