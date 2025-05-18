const mongoose = require("mongoose");

var mongoURL = "mongodb://localhost:27017/mern-rooms";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("mongo db connection failed");
});

connection.on("connected", () => {
  console.log("mongodb connection succssfull");
});

module.exports = mongoose;
