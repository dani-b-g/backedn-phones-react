const mongoose = require("mongoose");

const PhoneSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  manofacturer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  imageFileName: {
    type: String,
    required: true,
  },
  screen: {
    type: String,
    required: false,
  },
  processor: {
    type: String,
    required: false,
  },
  ram: {
    type: Number,
    required: false,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Phone", PhoneSchema);
