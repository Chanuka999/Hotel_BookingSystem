import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Bookingscreen = ({ match }) => {
  const { roomid } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/rooms/getroombyid", {
          roomid: match.param.roomid,
        });
        console.log("Rooms fetched:", response.data);
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true); // maybe this should be setError(true)?
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Booking scheem</h1>
      <h1>Room id - {roomid}</h1>
    </div>
  );
};

export default Bookingscreen;
