import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      setLoading(true);
      setError(false); // Reset error before login attempt
      const response = await axios.post("api/users/login", user);
      setLoading(false);

      localStorage.setItem("currentUser", JSON.stringify(response.data));
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {loading && <Loader />}
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg p-4 rounded-4">
          {error && <Error message="invalid credentials" />}
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
