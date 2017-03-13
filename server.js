
//install needed packages with npm  express body-parser mongoose morgan

//require  express and other packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var mongoose = require("mongoose");
var port = process.env.PORT || 8080;
//declare a variable `app` = express();
//declare a port variable

app.use(bodyParser.json());
app.use(morgan("dev"));




//set up body-parser and other middleware with app.use

//set up routes for requests to link to

app.use("/restaurant", require("./backend/routes/restaurantRoutes"));


//set up and connect to database
mongoose.connect("mongodb://localhost/team-taco", function (err) {
    if (err) throw err;
    console.log("database connected");
})
//finish server with app.listen
app.listen(port, function () {
    console.log("server active on port " + port);
})
