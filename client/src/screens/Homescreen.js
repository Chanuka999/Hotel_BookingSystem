import React, { useState, useEffect } from "react";
import axios from "axios";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        console.log("Rooms fetched:", data);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Home screen</h1>
      <h2>There are {rooms.length} rooms</h2>
    </div>
  );
};

export default Homescreen;
