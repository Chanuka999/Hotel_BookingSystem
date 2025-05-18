import React from "react";
import "../App.css";

const Room = ({ room }) => {
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h3>{room.name}</h3>
        <b>
          <p>Max count : {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Type : {room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          <button className="btn btn-primary">view details</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
