var express = require("express");
var userRoutes = express.Router();

userRoutes.route("/")
    .put(function (req, res) {
        User.findOneById(req.body._id, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(403).send({success: false, message: "No User identified. Forbidden!"});
            for (var key in req.body) {
                if (key = "email") continue;
                user[key] = req.body[key] || user[key];
            }
            user.save(function (err) {
                if (err) return res.status(500).send(err);
                res.send({success: true, message: "Successfully updated your profile", user: user.withoutPassword()});
            })
        })
    });

module.exports = userRoutes;