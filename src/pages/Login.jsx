import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Ensure the CSS file is present

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile"); // Navigate to profile page on button click
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign in to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="input-field">
          <label>Email Address</label>
          <div className="input-box">Enter email address</div>
        </div>

        <div className="input-field">
          <label>Password</label>
          <div className="input-box">Enter password</div>
        </div>

        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
