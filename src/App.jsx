import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Password from "./Components/Password";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/forgot-password" element={<Password />}></Route>
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
