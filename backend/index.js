const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/Routes/userRoutes");
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((_) => console.log("Connected to DB"))
  .catch((err) => console.error("error", err));

//The above Calles the current MongoDB database

app.use(cors())
app.use(express.json());
app.use("/auth", userRoutes);

app.listen(8000, () => console.log("Running on port 8000"));
