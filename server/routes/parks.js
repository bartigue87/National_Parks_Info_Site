const express = require("express");
const router = express.Router();
const Park = require("../models/Park");

//Get all
router.get("/", async (req, res) => {
  try {
    const parks = await Park.find();
    res.json(parks);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get specific
router.get("/:parkId", async (req, res) => {
  try {
    const park = await Park.findById(req.params.parkId);
    res.json(park);
  } catch (err) {
    res.json({ message: err });
  }
});

//Post
router.post("/", async (req, res) => {
  const park = new Park({
    name: req.body.name,
    location: req.body.location,
    dateEstablished: req.body.dateEstablished,
    description: req.body.description,
    imgUrl: [req.body.imgUrl],
    funFact: req.body.funFact,
    rank: req.body.rank,
    todo: [req.body.todo],
    animal: req.body.animal,
  });
  try {
    const savedPark = await park.save();
    res.json(savedPark);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update
router.patch("/:parkId", async (req, res) => {
  try {
    const updatedPark = await Park.updateOne(
      { _id: req.params.parkId },
      {
        $set: {
          name: req.body.name,
          location: req.body.location,
          dateEstablished: req.body.dateEstablished,
          description: req.body.description,
          funFact: req.body.funFact,
          animal: req.body.animal,
          rank: req.body.rank,
          todo: req.body.todo,
        },
      }
    );
    res.json(updatedPark);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete
router.delete("/:parkId", async (req, res) => {
  try {
    const deletedPark = await Park.findOneAndDelete({ _id: req.params.parkId });
    res.json(deletedPark);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
