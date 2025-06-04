import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

const Bookingscreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  const { roomid, fromdate: fromParam, todate: toParam } = useParams();
  const fromdate = moment(fromParam, "DD-MM-YYYY");
  const todate = moment(toParam, "DD-MM-YYYY");
  const totaldays = todate.diff(fromdate, "days") + 1;

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
                  <p>From Date : {fromdate.format("DD-MM-YYYY")}</p>
                  <p>To Date : {todate.format("DD-MM-YYYY")}</p>
                  <p>Max Count : {room.maxcount}</p>
                  <p>Amount :</p>
                </b>
                <hr />
                <b>
                  <p>Total Days : {totaldays}</p>
                  <p>Rent per day : {room.rentperday}</p>
                  <p>Total amount : {totaldays * room.rentperday}</p>
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
