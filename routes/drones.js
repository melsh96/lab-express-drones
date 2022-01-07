const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dbResponse) => {
      console.log("Database response: ", dbResponse);
      res.render("drones/list.hbs", {
        drones: dbResponse,
      });
    })
    .catch((e) => console.log(e));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ! To get the create page
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, proppellers, maxSpeed } = req.body;
  Drone.create(req.body)
    .then((newDrone) => {
      res.redirect("/drones/create");
    })
    .catch((e) => console.error(e));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
