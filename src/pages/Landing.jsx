import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-content">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="primary" onClick={() => navigate("/register")}>
        Create Account
      </button>
      <button className="secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landing;
