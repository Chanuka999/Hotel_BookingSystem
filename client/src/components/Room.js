import React, { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Link from "react-router-dom";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Link>
            <button className="btn btn-primary">Book now</button>
          </Link>
          <button className="btn btn-primary" onClick={handleShow}>
            view details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
