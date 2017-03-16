var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");       //you will have to write your own config file to link here
var mongoose = require("mongoose");
var port = process.env.PORT || 8080;    //feel free to use any default port number you want
var path = require("path");
var expressJwt = require("express-jwt");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
//we will eventually set up user auth middlewhere here with a secret of your choosing from your config file



    //!!!!!!!!!!!!!Enable next line when user auth is in place!!!!!!!!!!!!!!//
//app.user("/secure", expressJwt({secret: config.secret}));


//set up routes for requests to link to
app.use("/auth", require("./backend/routes/authRoutes"));
app.use("/restaurant", require("./backend/routes/restaurantRoutes"));
app.use("/zoomato", require("./backend/routes/zoomatoRoutes"));
app.user("/secure/user", require("./backend/routes/userRoutes"));

//set up and connect to database the database is linked from your config file.
//feel free to use whatever database name you want "mongodb://localhost/{{ your db name here }}"
mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("database connected");
});

//finish server with app.listen
app.listen(port, function () {
    console.log("server active on port " + port);
});