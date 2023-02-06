// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Traveller = require("./Traveller");
const Location = require("./Location");


// Initialize Product model (table) by extending off Sequelize's Model class
class Trips extends Model {}

// set up fields and rules for Product model
Trips.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    trip_budget: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Traveller,
            key: "id"
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Location,
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

Trips.sync();

module.exports = Trips;