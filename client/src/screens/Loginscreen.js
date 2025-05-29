import React, { useState, useEffect } from "react";
import axios from "axios";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    const user = {
      email,
      password,
    };
    try {
      const result = await axios.post("api/users/login", user).data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg p-4 rounded-4">
          <h2 className="text-center mb-4">login</h2>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" onClick={login}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
