import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import "./index.css";
import Logo from "../assets/Logo.png";

const OTPVerification = () => {
  const navigate=useNavigate()
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered OTP: " + otp.join(""));
    navigate("/set-password")
  };

  return (
    // <div className="container">
      <div className="form-box">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h2 className="title">OTP</h2>
        <p className="subtitle">Please enter the OTP you have received on your email.</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="otp-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          <button  className="register-btn">Submit</button>
        </form>
      </div>
    // </div>
  );
};

export default OTPVerification;
