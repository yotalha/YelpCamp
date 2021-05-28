const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Review = mongoose.model('Review', new Schema({
  body: String,
  rating: Number
}));

module.exports = Review; 