const mongoose = require("mongoose");

const ParkSchema = mongoose.Schema({
  name: { type: String },
  location: { type: String },
  dateEstablished: { type: String },
  description: { type: String },
  imgUrl: [{ type: String }],
  funFact: { type: String },
  rank: { type: String },
  todo: [{ type: String }],
  animal: { type: String },
  enviro: { type: String },
});

module.exports = mongoose.model("Parks", ParkSchema);
