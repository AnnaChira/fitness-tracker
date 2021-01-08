const router = require('express').Router();
const db = require("../models");
const { Workout } = require('../models');

router.get('/api/workouts', function(req, res) {
    db.Workout.find({}).then(function(results){
        res.json(results)
    })
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workout/add", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  


module.exports = router;