import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3>Priyanshika Agri Foods</h3>
            <p>Your trusted partner in agricultural excellence. Providing premium quality agricultural products and sustainable farming solutions.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">X (Twitter)</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Products</h4>
            <ul>
              <li><Link href="#products">Fresh Vegetables</Link></li>
              <li><Link href="#products">Grains & Cereals</Link></li>
              <li><Link href="#products">Fruits</Link></li>
              <li><Link href="#products">Spices & Herbs</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Company</h4>
            <ul>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#contact">Partnership</Link></li>
              <li><Link href="#contact">Careers</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h4>Contact Info</h4>
            <ul>
              <li>📞 0612-4537811</li>
              <li>✉️ priyanshikaagrifoods@gmail.com</li>
              <li>📍 Patna, Bihar - 800023</li>
              <li>🌐 www.priyanshikaagrifoods.com</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>© 2024 Priyanshika Agri Foods Private Limited. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}