import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

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
      <div className="mobile-menu-icon" onClick={toggleMobileSidebar}>
        <div />
        <div />
        <div />
      </div>

      <nav>
        <h3>
          <Link to="/" onClick={closeMobileSidebar}>
            AR Webstore
          </Link>
        </h3>

        {/* Desktop Navigation */}
        <ul className={`desktop-nav ${showMobileSidebar ? 'hide' : ''}`}>
          <li>
            <Link to="/" activeStyle={{ color: 'blue', textDecoration: 'underline' }} onClick={closeMobileSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeStyle={{ color: 'blue', textDecoration: 'underline' }} onClick={closeMobileSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              activeStyle={{ color: 'blue', textDecoration: 'underline' }}
              onClick={closeMobileSidebar}
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              activeStyle={{ color: 'blue' }}
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
