import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4007/register", { name, email, password })
      .then((res) => {
        alert("Created");
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh=100">
          <div className="bg-white p-3 rounded w-40">
            <h2>Zen Class Ticketing System for Query Resolving</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="Email"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div className="mb-3">
                <label htmlFor="Email">
                  <strong>Email</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="Email"
                  className="form-control rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="Password">
                  <strong>Password</strong>
                </label>
                <input
                  type="Password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="Password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button type="Submit" className="btn btn-success w-100 rounded-0">
                Register
              </button>
            </form>

            <p>Already Have An Account</p>
            <Link
              to="/login "
              className="btn btn-default border w-100 bg-ligh rounded-0 text-decoration-none"
            >
              Sign In
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Signup;
