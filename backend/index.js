const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/Routes/userRoutes");
const cors = require('cors');
const fileRoute = require('./src/Routes/fileRoutes');
const dotenv = require('dotenv');
const app = express();
const fs = require('fs');
const path = require('path');
const https = require('https');
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then((_) => console.log("Connected to DB"))
  .catch((err) => console.error("error", err));

//The above Calles the current MongoDB database

app.use(cors())
app.use(express.json());
app.use("/auth", userRoutes);
app.use("/file", fileRoute);

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  },
  app
)

sslServer.listen(8000, () => console.log("Running on port 8000"));
