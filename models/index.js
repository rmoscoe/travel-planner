// import models
const Location = require("./Location");
const Traveller = require("./Traveller");
const Trips = require("./Trips");

// Travellers have many locations through Trips
Location.belongsToMany(Traveller, {through: Trips});

// Locations have many travellers through Trips
Traveller.belongsToMany(Location, {through: Trips});

module.exports = {
  Location,
  Traveller,
  Trips
};