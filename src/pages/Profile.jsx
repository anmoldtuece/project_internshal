import React from "react";
import "./profile.css"; // Ensure the CSS file is imported

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <img src="/marrydoe.jpg" alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p className="email">Marry@gmail.com</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
