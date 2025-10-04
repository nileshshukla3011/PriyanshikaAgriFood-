import React from 'react';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Priyanshika Agri Foods?</h2>
        <p className={styles.subtitle}>
          Discover what makes us the preferred choice for agricultural products and services.
        </p>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌱</div>
            <h3>100% Organic</h3>
            <p>All our products are certified organic, grown without harmful chemicals or pesticides.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚚</div>
            <h3>Fresh Delivery</h3>
            <p>Direct from farm to your doorstep, ensuring maximum freshness and quality.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏆</div>
            <h3>Premium Quality</h3>
            <p>We maintain the highest standards of quality control and product excellence.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌍</div>
            <h3>Sustainable Farming</h3>
            <p>Committed to eco-friendly practices that protect our environment.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👥</div>
            <h3>Farmer Partnership</h3>
            <p>Supporting local farmers and promoting fair trade practices.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📞</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support for all your agricultural needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}