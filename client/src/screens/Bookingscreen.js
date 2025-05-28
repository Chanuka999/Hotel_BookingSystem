import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Bookingscreen = () => {
  const { roomid } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        console.log("Room fetched:", response.data);
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching room:", error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [roomid]);

  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img
                src={
                  room.imageurls && room.imageurls.length > 0
                    ? room.imageurls[0]
                    : ""
                }
                className="bigimg"
                alt={room.name}
              />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name :</p>
                  <p>From Date :</p>
                  <p>To Date :</p>
                  <p>Max Count : {room.maxcount}</p>
                  <p>Amount :</p>
                </b>
                <hr />
                <b>
                  <p>Total Days :</p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total amount :</p>
                  <p>Max Count : {room.maxcount}</p>
                </b>
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Bookingscreen;
