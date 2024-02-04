import React from "react";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4007/Create Query", {  })
      .then((res) => {
        console.log(res.data.Message);
        if (res.data.Message === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh=100">
          <div className="bg-white p-3 rounded w-40">
            <h2>DashBoard</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Create Query">
                {/* <strong>Name</strong> */}
              </label>

              <div className="mb-3">
                <label htmlFor="Query">
                  <strong>Query</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter the Query"
                  autoComplete="off"
                  name="Query"
                  className="form-control rounded-0"
                  onChange={(e) => setQuery(e.target.value)}
                ></input>
              </div>

              <button type="Submit" className="btn btn-success w-100 rounded-0">
                Send
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
