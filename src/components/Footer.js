import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Priyanshika Agri Foods</h3>
            <p className="footer-description">
              Your trusted partner in agricultural excellence. Providing premium quality 
              agricultural products and sustainable farming solutions.
            </p>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/share/17TdiSQw36/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
              <a 
                href="https://x.com/AgriFoods57500?t=CSZcDdYAfVKRbwPTNb_WXg&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                X (Twitter)
              </a>
              <a 
                href="https://www.instagram.com/reel/DN7dacpkgk7/?igsh=MXRsY3BycHJocjhvYQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Fresh Vegetables</a></li>
              <li><a href="#products">Grains & Cereals</a></li>
              <li><a href="#products">Fruits</a></li>
              <li><a href="#products">Spices & Herbs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Partnership</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-links">
              <li>📞 0612-4537811</li>
              <li>✉️ priyanshikaagrifoods@gmail.com</li>
              <li>📍 Patna, Bihar - 800023</li>
              <li>🌐 www.priyanshikaagrifoods.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Priyanshika Agri Foods Private Limited. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
