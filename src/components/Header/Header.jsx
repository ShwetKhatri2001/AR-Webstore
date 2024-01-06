import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const navigationLinks = [
    { label: "Home", Path: "/" },
    { label: "About", Path: "/about" },
    { label: "Feedback", Path: "/feedback" },
    { label: "Contact", Path: "/contact" },
  ];
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);
  return (
    <header>
      {/* Mobile Menu Icon */}
      <nav>
        <div className="navtop">
          <h3>
            <Link
              to="/"
              onClick={() => showMobileSidebar && setShowMobileSidebar(false)}
              className="project-title"
            >
              AR Webstore
            </Link>
          </h3>
          <div
            className={`mobile-menu-icon ${!showMobileSidebar ? "active" : ""}`}
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            {Array.from({ length: 2 + showMobileSidebar }, (_, i) => (
              <div key={i} className={i === 0 ? "firstbar" : i === 1 ? "secondbar" : "lastbar"}/>
            ))}
            {/* If the condition is true, only the first, second, and last div elements will be rendered. */}
          </div>
        </div>
        {/* Desktop Navigation */}
        <ul className={`desktop-nav ${showMobileSidebar ? "hide" : ""}`}>
          {navigationLinks.map((items, key) => {
            return (
              <Link to={items.Path} key={key}>
                {items.label}
              </Link>
            );
            /* activeStyle={{ color: "blue", textDecoration: "underline" }} */
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
