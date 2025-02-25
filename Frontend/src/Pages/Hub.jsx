import React from "react";
import "./Hubs.css"; // Import CSS
import { FaArrowLeft, FaSearch, FaBell, FaHome, FaGraduationCap, FaSitemap, FaUsers } from "react-icons/fa";
import { MdHub } from "react-icons/md";

const menuItems = [
  { icon: "🌟", title: "Charisma" },
  { icon: "📜", title: "Playlists" },
  { icon: "💬", title: "Quotes" },
  { icon: "🍽️", title: "Recipes" },
  { icon: "🎨", title: "Style Inspiration" },
  { icon: "🛍️", title: "Online Shop" },
  { icon: "📞", title: "1-1 Calls" },
];

const Hub = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <FaArrowLeft className="icon" />
        <div className="header-icons">
          <FaSearch className="icon" />
          <FaBell className="icon" />
        </div>
      </div>

      {/* Menu List */}
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <div>
              <h3 className="menu-title">{item.title}</h3>
              <p className="menu-subtitle">Available Soon</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <FaHome />
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <FaGraduationCap />
          <span>Programs</span>
        </div>
        <div className="nav-item">
          <FaSitemap />
          <span>Pathways</span>
        </div>
        <div className="nav-item">
          <MdHub />
          <span>Hubs</span>
        </div>
        <div className="nav-item">
          <FaUsers />
          <span>Community</span>
        </div>
      </div>
    </div>
  );
};

export default Hub;
