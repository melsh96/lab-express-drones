// Iteration #1
// Model done now : Seed some initial drones in our database

// Connecting to mongodb
require("../db/index");

// Connecting to the model
const Drone = require("../models/Drone.model");

// Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones.
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
(async function () {
  try {
    await Drone.deleteMany();
    const createdDrones = await Drone.create(drones);
    console.log(`How many drones have been created: ${createdDrones.length}`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit();
  }
})();
