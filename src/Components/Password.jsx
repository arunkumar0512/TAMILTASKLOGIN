import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [email, setEmail] = useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4007/forgot-password", { email })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh=100">
          <div className="bg-white p-3 rounded w-40">
            <h2>Forgot Password</h2>
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

              <button type="Submit" className="btn btn-success w-100 rounded-0">
                send
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};
export default Password;
