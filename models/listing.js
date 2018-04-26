const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  imgUrl: {type: String}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;