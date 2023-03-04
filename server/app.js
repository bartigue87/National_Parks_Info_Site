const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//Import routes
const parksRoute = require("./routes/parks");

app.use("/parks", parksRoute);
//Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(console.log("Connected to DB!"))
  .catch((err) => console.log(err));

//listen
app.listen(process.env.PORT || 3000, () =>
  console.log("The server is running on port 3000")
);
