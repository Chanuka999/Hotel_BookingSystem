const express = require("express");
const router = express.Router();
const Room = require("../models/room");

// Route to get all rooms
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// ✅ Corrected Route to get room by ID
router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  try {
    const room = await Room.findOne({ _id: roomid }); // corrected variable name
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.send(room);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
