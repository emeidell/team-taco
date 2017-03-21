var mongoose = require("mongoose");
var Schema = mongoose.Schema;

vacationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    notes: String,
    isActive: {
        type: Boolean,
        default: true
    },
    days: {
        totalDays: {
            type: Number,
            default: 0
        },
        days: [
            {
                dayOfWeek: String,
                breakfast: [{
                    restaurants: [{
                        type: Schema.Types.ObjectId,
                        rel: "Restaurant"
                    }]
                }],
                lunch: [{
                    restaurants: [{
                        type: Schema.Types.ObjectId,
                        rel: "Restaurant"
                    }]

                }],
                dinner: [{
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