import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Get in touch with us for any inquiries about our products or services.
        </p>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h4>Address</h4>
                <p>
                  Lal Neketan, C.P. Thakur Path,<br />
                  Professor Colony, Shivpuri,<br />
                  Aatal Path, Patna, Bihar<br />
                  Pin Code: 800023
                </p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h4>Phone</h4>
                <p>0612-4537811</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div>
                <h4>Email</h4>
                <p>priyanshikaagrifoods@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>📘 Facebook</a>
                <a href="#" className={styles.socialIcon}>🐦 X (Twitter)</a>
                <a href="#" className={styles.socialIcon}>📷 Instagram</a>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3>Send us a Message</h3>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <select id="subject" required>
                  <option value="">Select a subject</option>
                  <option value="inquiry">Product Inquiry</option>
                  <option value="order">Bulk Order</option>
                  <option value="partnership">Partnership</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}