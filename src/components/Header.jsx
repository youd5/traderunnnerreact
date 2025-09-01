import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="header-left">
        <Link to="/" className="logo">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" className="logo-image" />
        </Link>
      </div>
      <div className="header-right">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div>
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;