const mongoose = require("mongoose");

const ParkSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  dateEstablished: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: [{ type: String }],
});

module.exports = mongoose.model("Parks", ParkSchema);
