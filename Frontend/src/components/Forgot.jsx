import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
const Forgot = () => {
  const navigate=useNavigate()
  return (
    <div>
      {/* <div className="container"> */}
        <div className="form-box">
          <div className="logo-container">
            <img src={Logo} alt="The One Logo" className="logo" />
          </div>
          <h2 className="title">Forgot Password</h2>
          <p className="subtitle">
            If you forgot your password please enter your email to resest
          </p>
          <form className="form">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <button onClick={()=>{navigate("/varification")}}className="register-btn">Continue</button>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default Forgot;
