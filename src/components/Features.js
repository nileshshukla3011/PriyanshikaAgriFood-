import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌱',
      title: '100% Organic',
      description: 'All our products are certified organic, grown without harmful chemicals or pesticides.'
    },
    {
      icon: '🚚',
      title: 'Fresh Delivery',
      description: 'Direct from farm to your doorstep, ensuring maximum freshness and quality.'
    },
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'We maintain the highest standards of quality control and product excellence.'
    },
    {
      icon: '🌍',
      title: 'Sustainable Farming',
      description: 'Committed to eco-friendly practices that protect our environment.'
    },
    {
      icon: '👥',
      title: 'Farmer Partnership',
      description: 'Supporting local farmers and promoting fair trade practices.'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your agricultural needs.'
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Priyanshika Agri Foods?</h2>
          <p className="section-subtitle">
            Discover what makes us the preferred choice for agricultural products and services.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
