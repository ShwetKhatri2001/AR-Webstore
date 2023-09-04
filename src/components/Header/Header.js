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
          <li>
            <Link
              to="/"
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
              onClick={closeMobileSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/ShwetKhatri2001/AR-Webstore#hi--shwet-here-and-welcome-to-ar-webstore"
              target="_blank"
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
              onClick={closeMobileSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
              onClick={closeMobileSidebar}
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
              onClick={closeMobileSidebar}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
