// set up the routes for restaurant requests
var express = require("express");
var config = require("../../config");
var restaurantRoutes = express.Router();
var Restaurant = require("../models/restaurantSchema");
var request = require("request");

//this will be the restaurant routes use for our own database we will add routes for when we connect to the zoomato api separately.

restaurantRoutes.route("/")
    .get(function (req, res) {
        Restaurant.find(function (err, restaurants) {
            if (err) return res.status(500).send(err);
            res.send(restaurants)
        })
    })
    .post(function (req, res) {
        Restaurant.findOne({id: req.body.id}, function (err, existingRestaurant) {
            if (err) return res.status(500).send(err);
            if (existingRestaurant) return res.send(existingRestaurant);
            var restaurant = new Restaurant(req.body);
            restaurant.save(function (err, newRestaurant) {
                if (err) return res.status(500).send(err);
                res.status(201).send(newRestaurant);
            });
        });

    });

restaurantRoutes.route("/:id")
    .get(function (req, res)  {
        Restaurant.findOneById(req.body._id, function (err, restaurant) {
            if (err) return res.status(500).send(err);
            res.send(restaurant);
        })
    })
    .put(function (req, res) {
        Restaurant.findOneByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, updatedRestaurant) {
            if (err) return res.status(500).send(err);
            res.send(updatedRestaurant);
        })
    })
    .delete(function (req, res) {
        Restaurant.findOneByIdAndRemove(req.body._id, function (err, deletedRestaurant) {
            if (err) return res.status(500).send(err);
            res.send({success: true, message: "restaurant successfully deleted"});
        })
    });


module.exports = restaurantRoutes;

