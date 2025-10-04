import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Priyanshika Agri Foods</h2>
          <p className="section-subtitle">
            Committed to excellence in agricultural products and sustainable farming practices.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality agricultural products and food solutions while 
                promoting sustainable farming practices. We are dedicated to delivering 
                fresh, nutritious, and organic produce that meets the highest standards 
                of quality and safety.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To become a leading agricultural company that contributes to food security 
                and sustainable development. We envision a future where every family has 
                access to fresh, healthy, and affordable agricultural products.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Values</h3>
              <ul>
                <li>Quality First - We never compromise on quality</li>
                <li>Sustainability - Committed to eco-friendly practices</li>
                <li>Innovation - Embracing modern agricultural techniques</li>
                <li>Customer Satisfaction - Your trust is our priority</li>
                <li>Community Development - Supporting local farmers</li>
              </ul>
            </div>
          </div>
          
          <div className="about-info">
            <div className="info-card">
              <h4>Company Information</h4>
              <div className="info-item">
                <strong>Company Name:</strong>
                <span>Priyanshika Agri Foods Private Limited</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong>
                <span>Lal Neketan, C.P. Thakur Path, Professor Colony, Shivpuri, Aatal Path, Patna, Bihar</span>
              </div>
              <div className="info-item">
                <strong>Pin Code:</strong>
                <span>800023</span>
              </div>
              <div className="info-item">
                <strong>Phone:</strong>
                <span>0612-4537811</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>priyanshikaagrifoods@gmail.com</span>
              </div>
            </div>
            
            <div className="certifications">
              <h4>Certifications & Standards</h4>
              <div className="cert-grid">
                <div className="cert-item">
                  <span className="cert-icon">🌱</span>
                  <span>Organic Certified</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✅</span>
                  <span>Quality Assured</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🏆</span>
                  <span>ISO Certified</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🌍</span>
                  <span>Eco Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
