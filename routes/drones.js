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
    .catch((e) => console.error(e));
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
      res.redirect("/drones");
    })
    .catch((e) => console.error(e));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((dbResponse) => {
      res.render("drones/update-form", {
        drone: dbResponse,
      });
    })
    .catch((e) => console.error(e));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((results) => {
      res.redirect("/drones");
    })
    .catch((e) => console.error(e));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then((results) => {
      res.redirect("/drones");
    })
    .catch((e) => console.error(e));
});

module.exports = router;
