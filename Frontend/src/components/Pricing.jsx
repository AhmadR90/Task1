import React, { useState } from "react";
// import "./styles.css";
import Logo from "../assets/Logo.png";

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    // <div className="container">
      <div className="form-box">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h2 className="title">
          Empower Learning, <span className="highlight">Elevate Success</span>
        </h2>
        <p className="subtitle">
          Streamline education with an all-in-one platform for courses, collaboration, and growth.
        </p>
        <div className="toggle-container">
          <button 
            className={`toggle-button ${!isYearly ? "active" : ""}`} 
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button 
            className={`toggle-button ${isYearly ? "active" : ""}`} 
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
        <div className="pricing-card">
          <h3 className="pricing-title">Standard</h3>
          <p className="pricing-price">$29</p>
          <ul className="pricing-features">
            <li>&#10003; Access to all modules</li>
            <li>&#10003; New content every week</li>
            <li>&#10003; Participation in forum and groups</li>
            <li className="disabled">&#10007; Access to live sessions with instructors</li>
            <li className="disabled">&#10007; Opportunity to ask questions to experts</li>
            <li className="disabled">&#10007; Risk-free cancellation, anytime</li>
            <li>&#128274; Lock in your price forever</li>
          </ul>
          <button className="register-btn">JOIN THE ONE</button>
        </div>
      </div>
    // </div>
  );
};

export default PricingComponent;