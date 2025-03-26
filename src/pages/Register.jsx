import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/profile"); // Navigate to Profile Page
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create your PopX account</h2>

      <div className="info-group">
        <span className="label">Full Name*</span>
        <span className="value">Marry Doe</span>
      </div>

      <div className="info-group">
        <span className="label">Phone Number*</span>
        <span className="value">Marry Doe</span>
      </div>

      <div className="info-group">
        <span className="label">Email Address*</span>
        <span className="value">Marry Doe</span>
      </div>

      <div className="info-group">
        <span className="label">Password*</span>
        <span className="value">Marry Doe</span>
      </div>

      <div className="info-group">
        <span className="label">Company Name</span>
        <span className="value">Marry Doe</span>
      </div>

      <div className="info-group">
        <span className="label">Are you an Agency?*</span>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" checked readOnly /> Yes
          </label>
          <label className="radio-label">
            <input type="radio" readOnly /> No
          </label>
        </div>
      </div>

      <button onClick={handleRegister}>Create Account</button>
    </div>
  );
};

export default Register;
