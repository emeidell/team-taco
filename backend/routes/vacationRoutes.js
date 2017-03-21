var express = require("express");
var vacationRoutes = express.Router();
var Vacation = require("../models/vacationSchema");

vacationRoutes.route("/")
    .get(function (req, res) {
        Vacation.find({user: req.query.user}, function (err, vacations) {
            if (err) return res.status(500).send(err);
            if (!vacations.length) return res.status(404).send({message: "no vacation"})
            res.send(vacations)
        })
    })
    .post(function (req, res) {
        var vacation = new Vacation(req.body);
        vacation.save(function (err, newVacation) {
            if (err) return res.status(500).send(err);
            res.status(201).send(newVacation);
        })
    });

vacationRoutes.route("/:id")
    .get(function (req, res)  {
        Vacation.findOneById(req.body._id, function (err, vacation) {
            if (err) return res.status(500).send(err);
            res.send(vacation);
        })
    })
    .put(function (req, res) {
        Vacation.findOneByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, updatedVacation) {
            if (err) return res.status(500).send(err);
            res.send(updatedVacation);
        })
    })
    .delete(function (req, res) {
        Vacation.findOneByIdAndRemove(req.body._id, function (err, deletedVacation) {
            if (err) return res.status(500).send(err);
            res.send({success: true, message: "vacation successfully deleted"});
        })
    });

module.exports = vacationRoutes;