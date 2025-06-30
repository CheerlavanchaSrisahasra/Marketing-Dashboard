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

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="logo">
        ASTROLITE <span className="tagline">The Future Deals Here...</span>
      </div>
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
