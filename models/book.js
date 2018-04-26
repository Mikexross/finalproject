const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  rental: { type: String, required: true },
  price: { type: String, required: true },
  imgUrl: { type:String },
  size: { type:String },
  date: { type: Date, default: Date.now },
  amenities: [{
    type: String
}],
  location: String,
  images:[{data: Buffer, contentType: String}]

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
