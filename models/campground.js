const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Campground = mongoose.model('Campground', new Schema({
  title: String,
  price: String,
  description: String,
  location: String
}));


module.exports = Campground;