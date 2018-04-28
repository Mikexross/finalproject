const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitiesSchema = new Schema({
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
});

const Amenities = mongoose.model("Amenities", amenitiesSchema);

module.exports = Amenities;