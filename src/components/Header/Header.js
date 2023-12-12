import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const closeMobileSidebar = () => {
    setShowMobileSidebar(false);
  };

  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link to="/" onClick={closeMobileSidebar} className="project-title">
              AR Webstore
            </Link>
          </h3>
          <div className="mobile-menu-icon" onClick={toggleMobileSidebar}>
            <div />
            <div />
            <div />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className={`desktop-nav ${showMobileSidebar ? "hide" : ""}`}>
          <Link
            to="/"
            // activeStyle={{ color: "blue", textDecoration: "underline" }}
            onClick={toggleMobileSidebar}
          >
            Home
          </Link>
          <Link
            to="/about"
            // target="_blank"
            onClick={toggleMobileSidebar}
            // activeStyle={{ color: "blue", textDecoration: "underline" }}
          >
            About
          </Link>

          <Link
            to="/feedback"
            onClick={toggleMobileSidebar}
            // activeStyle={{ color: "blue", textDecoration: "underline" }}
          >
            Feedback
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileSidebar}
            // activeStyle={{ color: "blue", textDecoration: "underline" }}
          >
            Contact Us
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
