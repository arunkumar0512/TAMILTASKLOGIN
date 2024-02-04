import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4007/login", { email, password })
      .then((res) => {
        console.log(res.data.Message);
        if (res.data.Message === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh=100">
          <div className="bg-white p-3 rounded w-40">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email">{/* <strong>Name</strong> */}</label>

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

                <button
                  type="Submit"
                  className="btn btn-success w-100 rounded-0"
                >
                  login
                </button>
              </div>
            </form>
            <p>
              <Link to="/forgot-password">Forgot Password</Link> <br></br>
              Create An Account
            </p>

            <Link
              to="/register"
              className="btn btn-default border w-100bg-light rounded-0 text-decoration-none"
            >
              Sign up
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
