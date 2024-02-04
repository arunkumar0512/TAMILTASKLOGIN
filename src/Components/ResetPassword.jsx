import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4007/reset-password/${id}/${token}/${password}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === "Success") {
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
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Email">{/* <strong>Name</strong> */}</label>

              <div className="mb-3">
                <label htmlFor="Email">
                  <strong>New Password</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="Password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <button type="Submit" className="btn btn-success w-100 rounded-0">
                update
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};
export default ResetPassword;
