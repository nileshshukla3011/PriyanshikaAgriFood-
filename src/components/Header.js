import React, { useState } from 'react';
import logoImage from '../assets/images/LOGO.jpeg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img src={logoImage} alt="Priyanshika Agri Foods Logo" className="logo-image" />
            <h2>Priyanshika Agri Foods</h2>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="nav-actions">
            <button className="btn btn-secondary">Sign In</button>
            <button className="btn">Get Started</button>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
