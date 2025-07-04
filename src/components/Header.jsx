import React from "react";
import {
  FaBars,
  FaWhatsapp,
  FaEnvelope,
  FaSearch,
  FaMoon,
  FaSun,
  FaExpand,
  FaBell,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

const Header = ({
  toggleSidebar,
  toggleDarkMode,
  toggleFullScreen,
  darkMode,
}) => {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars className="sidebar-icon" />
      </button>

      <div className="buy-sell-container">
        <button className="buy-btn">BUY</button>
        <button className="sell-btn">SELL</button>
      </div>

      <div className="social-container">
        <FaWhatsapp className="whatsapp-icon" />
        <FaEnvelope className="mail-icon" />
      </div>

      <div className="search-container1">
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="header-controls">
        <button onClick={toggleDarkMode} className="icon-container">
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>
        <button onClick={toggleFullScreen} className="icon-container">
          <FaExpand className="icon" />
        </button>
      </div>

      <div className="notification-container">
        <div className="notification-bell">
          <FaBell className="bell-icon" />
          <span className="badge">3</span>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-icon">
          <FaUser className="user-icon" />
        </div>
        <div className="profile-info">
          <span className="username">Saikruapan</span>
          <FaChevronDown className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
