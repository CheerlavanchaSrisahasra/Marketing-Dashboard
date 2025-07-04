import React from "react";
import {
  FaLeaf,
  FaStar,
  FaPrint,
  FaHeart,
  FaShoppingCart,
  FaCommentDots,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";
import logo from "../assets/logo-astro.png";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="logo">
        {/* ASTROLITE{" "} */}
        <span className="tagline">
          <div className="logo-container">
            <img src={logo} alt="" className="sidebar-logo" />
          </div>
          {/* The Future Deals Here... */}
        </span>
      </div>

      {/* <div className="logo-wrapper">
        <h1 className="logo-text">
          <span className="blue">A</span>
          <span className="blue">S</span>
          <span className="blue">T</span>
          <span className="blue">R</span>
          <span className="logo-o">
            <div className="arrow"></div>
            <div className="circle"></div>
          </span>
          <span className="black">L</span>
          <span className="black">I</span>
          <span className="black">T</span>
          <span className="black">E</span>
        </h1>
        <p className="tagline">The Future begins here...</p>
      </div> */}

      <nav className="sidebar-nav">
        <div className="nav-section">
          <a className="active">
            <FaLeaf /> Market
          </a>
          <a>
            <FaStar /> Categories
          </a>
        </div>
        <div className="nav-divider" />
        <div className="nav-section">
          <a>
            <FaPrint /> Order <span className="badge1">3</span>
          </a>
          <a>
            <FaHeart /> Favourite
          </a>
          <a>
            <FaShoppingCart /> Cart <span className="badge1">8</span>
          </a>
          <a>
            <FaCommentDots /> Message
          </a>
        </div>
        <div className="nav-divider" />
        <div className="nav-section">
          <a>
            <FaStar /> Feedback
          </a>
          <a>
            <FaQuestionCircle /> Help
          </a>
          <a>
            <FaCog /> Settings
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
