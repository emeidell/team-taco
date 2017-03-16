var express = require("express");
var authRoutes = express.Router();
var User = require("../models/userSchema");
var jwt = require("jsonwebtoken");
var config = require("../../config");

authRoutes.route("/signup")
    .post(function (req, res) {
        User.find({email: req.body.email}, function (err, existingUser) {
            if (err) return res.status(500).send(err);
            if (existingUser.length) return res.send({success: false, message: "User already exists"});
            var newUser = new User(req.body);
            newUser.save(function (err) {
                if (err) return res.status(500).send(err);
                res.status(201).send({success: true, message: "Successfully Signed up!", user: newUser})
            });
        })
    });

authRoutes.route("/login")
    .post(function (req, res) {
        User.findOne({email: req.body.email}, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(401).send({success: false, message: "invalid email or password"});
            user.checked(req.body.password, function (err, isMatch) {
                if (err) return res.status(500).send(err);
                if (!isMatch) res.status(401).send({success: false, message: "invalid email or password"});
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "2h"});
                res.send({success: true, message: "Succesfully logged in!", token: token, user: user.withoutPassword()});
            });
        })
    });

module.exports = authRoutes;