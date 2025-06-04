import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Error from "../components/Error";
import moment from "moment";
import "antd/dist/reset.css";
import Loader from "../components/Loader";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();

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

  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      // Use clone to avoid moment mutability issues
      setFromdate(moment(dates[0]).clone().format("DD-MM-YYYY"));
      setTodate(moment(dates[1]).clone().format("DD-MM-YYYY"));
    } else {
      setFromdate(undefined);
      setTodate(undefined);
    }
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {fromdate && todate && (
          <div className="col-md-12 mb-3">
            <h5>
              Selected Dates: {fromdate} to {todate}
            </h5>
          </div>
        )}
        {loading ? (
          <Loader />
        ) : rooms.length > 1 ? (
          rooms.map((room, index) => {
            return (
              <div className="col-md-9 mt-2" key={room._id || index}>
                <Room room={room} fromdate={fromdate} todate={todate} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
};

export default Homescreen;
