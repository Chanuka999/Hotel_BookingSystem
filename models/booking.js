const mongoose = require("mongoose");
const { useId } = require("react");

const Bookingscreen = mongoose.Schema(
  {
    room: {
      type: String,
      required: true,
    },
    roomid: {
      type: String,
      required: true,
    },
    useid: {
      type: String,
      required: true,
    },
    fromdate: {
      type: String,
      required: true,
    },
    todate: {
      type: String,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },
    totaldays: {
      type: String,
      required: true,
    },
    transactionid: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },
  {
    timestamps: true,
  }
);

const bookingmodel = mongoose.model("bookings", bookingSchema);

module.exports = bookingmodel;
