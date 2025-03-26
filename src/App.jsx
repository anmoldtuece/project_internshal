import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile"; // Import Profile page
import "./App.css";

function App() {
  return (
    <Router>
      <div className="phone-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} /> {/* Add this */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
