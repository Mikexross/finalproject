const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  rental: { type: String, required: true },
  price: { type: String, required: true },
  imgUrl: { type:String, required: true },
  size: { type:String },
  date: { type: Date, default: Date.now },
  dog_friendly: {type:String},
  cat_friendly: {type:String},
  w_dInUnit: {type:String},
  w_dCoin: {type:String},
  garage: {type:String},
  furnished: {type:String},
  fireplace: {type:String},
  yard: {type:String},
  gym: {type:String},
  pool: {type:String},
  hottub: {type:String},
  dishwasher: {type:String},
  smoking: {type:String},
  other: {type:String},
  location: {type:String},
  images:[{data: Buffer, contentType: String}]

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
