const mongoose = require("mongoose");

const ParkSchema = mongoose.Schema({
  name: String,
  location: String,
  dateEstablished: String,
  description: String,
});

module.exports = mongoose.model("Parks", ParkSchema);
