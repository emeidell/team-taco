var express = require("express");
var userRoutes = express.Router();
var User = require("../models/userSchema");


userRoutes.route("/")
    .put