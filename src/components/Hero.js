import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to{' '}
            <span className="gradient-text">Priyanshika Agri Foods</span>
          </h1>
          <p className="hero-description">
            Your trusted partner in agricultural excellence. We provide premium quality 
            agricultural products and food solutions, committed to sustainable farming 
            and delivering fresh, nutritious produce to your table.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Our Products</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>100%</h3>
              <p>Organic Quality</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-header">
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="card-content">
              <div className="code-line"></div>
              <div className="code-line short"></div>
              <div className="code-line medium"></div>
              <div className="code-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
