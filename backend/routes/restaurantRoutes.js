// set up the routes for restaurant requests
var express = require("express");
var config = require("../../config");
var restaurantRoutes = express.Router();
var Restaurant = require("../models/restaurantSchema");
var request = require("request");

//get express and other variables you need

restaurantRoutes.route("/")
    .get(function (req, res) {
        Restaurant.find(function (err, restaurants) {
            if (err) return res.status(500).send(err);
            res.send(restaurants)
        })
    })
    .post(function (req, res) {
        var restaurant = new Restaurant(req.body);
        restaurant.save(function (err, newRestaurant) {
            if (err) return res.status(500).send(err);
            res.status(201).send(newRestaurant);
        })
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
    })


request("url", function (err, response, body) {
    
})


module.exports = restaurantRoutes;


//set up the routes to allow for C.R.U.D other modifications can be made later if needed