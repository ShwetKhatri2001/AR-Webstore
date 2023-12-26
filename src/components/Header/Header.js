import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from '../../assets/logo.png';

const Header = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const closeMobileSidebar = () => {
    setShowMobileSidebar(false);
  };

  const logoStyle = {
    width: '70px',  // Set the width as needed
    height: 'auto',  // Maintain the aspect ratio
  };


  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
            <img src= {logo} alt="My Logo" style={logoStyle}  />
         {/* <h3>
            <Link to="/" onClick={closeMobileSidebar} className="project-title">
            </Li nk>
          </h3> */}
          <div className={`mobile-menu-icon ${!showMobileSidebar ? "active" :""}`} onClick={toggleMobileSidebar}>
            <div />
            {showMobileSidebar && <div />}
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
