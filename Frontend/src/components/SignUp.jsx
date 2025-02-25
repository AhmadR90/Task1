import React from "react";
import Logo from "../assets/Logo.png"
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate=useNavigate()
  return (
    // <div className="container">
      <div className="form-box">
        <div className="logo-container">
          <img src={Logo} alt="The One Logo" className="logo" />
        </div>
        <h2 className="title">Sign up</h2>
        <p className="subtitle">
          Already have an account? <span onClick={()=>{navigate("/")}} className="login-link">Login</span>
        </p>
        <form className="form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your First name" />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter your Last name" />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <div className="gender-options">
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your Password" />
          </div>
          <button onClick={()=>{navigate("/")}} className="register-btn">Register</button>
        </form>
      </div>
    // </div>
  );
};

export default SignupForm;
