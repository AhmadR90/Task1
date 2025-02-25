import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
const SetPassword = () => {
  const navigate=useNavigate();
  return (
    // <div className="container">
      <div className="form-box">
        <div className="logo-container">
          <img src={Logo} alt="The One Logo" className="logo" />
        </div>
        <h2 className="title">Set Password</h2>
        <p>Please set your new password</p>
        <form className="form">
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>

          <button onClick={()=>{navigate("/")}}className="register-btn">Submit</button>
        </form>
      </div>
    // </div>
  );
};

export default SetPassword;
