const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var restaurantSchema = new mongoose.Schema({
    name : String,
    location: String,
    budget : String,
    rating : Number,
    menu : [String],
    cuisine : [String]
});


const restaurants = mongoose.model('Restaurant',restaurantSchema,'restaurant');

module.exports = restaurants;