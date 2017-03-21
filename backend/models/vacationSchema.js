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
    vacationDetails: {
        totalDays: {
            type: Number,
            default: 0
        },
        mealSchedule: [{
            dayOfWeek: String,
            meal: String,
            restaurant: {
                type: Schema.Types.ObjectId,
                rel: "Restaurant"
            }
        }]
    }
});

module.exports = mongoose.model("Vacation", vacationSchema);