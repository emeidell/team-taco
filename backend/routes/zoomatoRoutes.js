var express = require("express");
var zomatoRoutes = express.Router();
var request = require("request");
var config = require("../../config");

zomatoRoutes.route("/")
    .get(function (req, res) {
        if (req.query) {
            var query = "?";
            for (var key in req.query) {
                query += key + "=" + req.query[key] + "&";
            }
            query = query.split("");
            query.pop();
            query = query.join("");
            console.log(query);
        } else {
            var query = "";
        }
        console.log(req.query);
        var options = {
            url: "https://developers.zomato.com/api/v2.1/search" + query,
            headers: {
               'user-key': config.key
            }
        };
        request(options, function (err, response, body) {
            if (err) return res.status(500).send(err);
            res.send(body);
        })
    });

module.exports = zomatoRoutes;
