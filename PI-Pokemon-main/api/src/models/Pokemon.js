const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.INTEGER,
     
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 500,
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 500,
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 100,
      }
    },
    weight: {
      type: DataTypes.INTEGER,

    },
    img: {
      type: DataTypes.TEXT,
      defaultValue: 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
    },
    cratedInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  },
  {
    timestamps: false,
  });
};
