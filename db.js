// const mongoose = require("mongoose");

// var mongoURL =
//   "mongodb+srv://chanuka:Dbsymw1rEjIzs5wh@cluster0.md3oc.mongodb.net/";

// mongoose.connect(mongoURL, {
//   useUnifieldTopology: true,
//   useNewUrlParser: true,
// });

// var connection = mongoose.connection;

// connection.on("error", () => {
//   console.log("mongo db connection failed");
// });

// connection.on("connected", () => {
//   console.log("mongodb connection succssfull");
// });

// module.exports = mongoose;

const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://chanuka:Dbsymw1rEjIzs5wh@cluster0.md3oc.mongodb.net/mern-rooms?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}

connectDB();

module.exports = mongoose;
