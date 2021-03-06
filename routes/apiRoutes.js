var db = require("../models");



module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts", (req, res) => {
        db.Workout.create({ type: "workout" })
            .then((response) => { res.json(response) })
            .catch((err) => {
                console.log(err)
            })
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
            .then((response) => { res.json(response) })
            .catch((err) => {
                console.log(err)
            })
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });


}