// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Location = require("./Location");
const Trips = require("./Trips");


// Initialize Product model (table) by extending off Sequelize's Model class
class Traveller extends Model {}

// set up fields and rules for Product model
Traveller.init(
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
        references: {
            model: Traveller,
            key: "id"
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
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