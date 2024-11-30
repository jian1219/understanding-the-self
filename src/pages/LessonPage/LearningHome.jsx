import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../LessonPage/LessonGeneral.css";

import logo_brain from "../../images/logo brain.jpg";
import profile from "../../icons/profile-user (1).png";

function LearningDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
    closeMenu(); // Close the menu after navigation
  };

  return (
    <div className="flex justify-center dashboard-background">
      <div className="dashboard-header">
        <img className="dashboard-logo" src={logo_brain} alt="" />
        <div className="dashboard-nav">
          <button onClick={() => handleNavigation('/learningHome')} className="button-activate">
            Home
          </button>
          <button onClick={() => handleNavigation('/learningStudents')}>Students</button>
          <button onClick={() => handleNavigation('/learningBooks')}>Books</button>
          <button onClick={() => handleNavigation('/learningActivities')}>Activities</button>
          <button onClick={toggleMenu}>
            <img className="w-[24px] ml-1" src={profile} alt="" />
          </button>

          {/* Toggleable Div */}
          {menuOpen && (
            <div className="menu-dropdown">
              <button onClick={() => handleNavigation('/learningProfile')}>Profile</button>
              <button onClick={() => handleNavigation('/learningRecords')}>Records</button>
              <button onClick={() => handleNavigation('/learningStatistics')}>Statistics</button>
              <button onClick={() => handleNavigation('/Home')}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LearningDashboard;
