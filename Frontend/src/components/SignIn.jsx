import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "123") {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };
  
  return (
    <>
      <div className="form-box">
        <div className="logo-container">
          <img src={Logo} alt="The One Logo" className="logo" />
        </div>
        <h2 className="title">Sign In</h2>
        <p className="subtitle">
          Don't have an Account? <span onClick={() => {navigate("/signup")}} className="login-link">Register</span>
        </p>
        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <span onClick={() => {navigate("/forgot-password")}} className='login-link'>Forgot Password?</span>
          <button type="submit" className="register-btn">Login</button>
        </form>
      </div>
    </>
  )
}

export default SignIn;
