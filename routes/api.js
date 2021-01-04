const router = require('express').Router();
const db = require("../models");

router.get('/api/workouts', function(req, res) {
    db.Workout.find({}).then(function(results){
        res.json(results)
    })
});




module.exports = router;