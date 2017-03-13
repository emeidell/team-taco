var mongoose = require("mongoose")
var Schema = mongoose.Schema;


var restaurantSchema = new Schema({

    id: {        //this id will come from the api, mongo will also add an _id as well
                 //The mongo _id will be for us to reference our db.
                 //The other we will need for when we are needing to reference the api specific data and relations.
                 //Kind of annoying but we will probably need access to both.
        type: String,
        required: true,
        uinque: true
    },
    name: String,
    url: String,
    location: {
        address: String,
        locality: String,
        city: String,
        latitude: String,
        longitude: String,
        zipcode: String,
        country_id: String
    },
    average_cost_for_two: String,
    price_range: String,
    currency: String,
    thumb: String,
    featured_image: String,
    photos_url: String,
    menu_url: String,
    events_url: String,
    user_rating: {
        aggregate_rating: String,
        rating_text: String,
        rating_color: String,
        votes: String
    },
    has_online_delivery: String,
    is_delivering_now: String,
    has_table_booking: String,
    deeplink: String,
    cuisines: String,
    all_reviews_count: String,
    photo_count: String,
    phone_numbers: String,
    photos: [
        {
            id: String,
            url: String,
            thumb_url: String,
            user: {
                name: String,
                zomato_handle: String,
                foodie_level: String,
                foodie_level_num: String,
                foodie_color: String,
                profile_url: String,
                profile_deeplink: String,
                profile_image: String
            },
            res_id: String,
            caption: String,
            timestamp: String,
            friendly_time: String,
            width: String,
            height: String,
            comments_count: String,
            likes_count: String
        }
    ],
    all_reviews: [
        {
            rating: String,
            review_text: String,
            id: String,
            rating_color: String,
            review_time_friendly: String,
            rating_text: String,
            timestamp: String,
            likes: String,
            user: {
                name: String,
                zomato_handle: String,
                foodie_level: String,
                foodie_level_num: String,
                foodie_color: String,
                profile_url: String,
                profile_deeplink: String,
                profile_image: String
            },
            comments_count: String
        }
    ]

});


module.exports = mongoose.model("Restaurant", restaurantSchema);