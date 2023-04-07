const mongoose = require("mongoose");
// const env = require("./enviorment");


mongoose.connect(`mongodb://127.0.0.1/psi_dev`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Successfully connected to mongodb");
});

module.exports = db;