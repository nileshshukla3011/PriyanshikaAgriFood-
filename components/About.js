'use client';

import styles from './About.module.css';

const About = () => {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Priyanshika Agri Foods</h2>
          <p className="section-subtitle">
            Committed to excellence in agricultural products and sustainable farming practices.
          </p>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.aboutCard}>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality agricultural products and food solutions while 
                promoting sustainable farming practices. We are dedicated to delivering 
                fresh, nutritious, and organic produce that meets the highest standards 
                of quality and safety.
              </p>
            </div>
            
            <div className={styles.aboutCard}>
              <h3>Our Vision</h3>
              <p>
                To become a leading agricultural company that contributes to food security 
                and sustainable development through innovative farming techniques and 
                responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;