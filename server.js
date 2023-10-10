require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
// // Global Configuration
const mongoURI = process.env.MONGO_URI;

app.use(cors());

mongoose.set("debug", true); // display mongoose query inside log

mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
});

app.use(express.json()); // We use the express.json built-in middleware function to JSON content received from the incoming requests.

app.use("/api", require("./routes")); // redirect to index in routes folder

app.listen(port, () => {
  console.log("App is runnung on port " + port);
});
