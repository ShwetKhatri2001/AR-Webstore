import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f0f0f0",
    padding: "1rem",
    position: "inherit",
  };

  const navStyle = {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    margin: "0 1rem",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "blue",
    textDecoration: "underline",
  };

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <header>
      {/* Mobile Sidebar */}
      <div
        style={{
          display: showMobileSidebar ? "block" : "none",
          position: "fixed",
          top: 0,
          right: 0,
          width: "70%",
          height: "100%",
          background: "#f0f0f0",
          padding: "1rem",
          zIndex: 1001,
        }}
      >
        <ul style={{ ...navStyle, flexDirection: "column" }}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/products" style={linkStyle} activeStyle={activeLinkStyle}>
              Products
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div
        style={{
          display: "none",
          cursor: "pointer",
          marginRight: "1rem",
        }}
        onClick={toggleMobileSidebar}
      >
        <div style={{ width: "30px", height: "3px", background: "#333" }} />
        <div style={{ width: "30px", height: "3px", background: "#333", marginTop: "5px" }} />
        <div style={{ width: "30px", height: "3px", background: "#333", marginTop: "5px" }} />
      </div>

      <nav style={headerStyle}>
        <h3>
          <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>
            AR Webstore
          </Link>
        </h3>

        {/* Desktop Navigation */}
        <ul style={navStyle}>
          <li style={liStyle}>
            <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/products" style={linkStyle} activeStyle={activeLinkStyle}>
              Products
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
