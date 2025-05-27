import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        console.log("Rooms fetched:", data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching rooms:", error);
        setLoading(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          <Error />
        ) : (
          rooms.map((room, index) => {
            return (
              <div className="col-md-9 mt-2" key={room._id || index}>
                <Room room={room} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
