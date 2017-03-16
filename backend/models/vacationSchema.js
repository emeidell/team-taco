var mongoose = require("mongoose");
var Schema = mongoose.Schema;

vacationSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    days: {
        totalDays: Number,
        days: [
            {
                date: String,
                morning: [{
                    restaurants: [{
                        type: Schema.Types.ObjectId,
                        rel: "Restaurant"
                    }]
                }],
                afternoon: [{
                    restaurants: [{
                        type: Schema.Types.ObjectId,
                        rel: "Restaurant"
                    }]

                }],
                evening: [{
                    restaurants: [{
                        type: Schema.Types.ObjectId,
                        rel: "Restaurant"
                    }]

                }]
            }
        ]
    }
});

module.exports = mongoose.model("Vacation", vacationSchema);