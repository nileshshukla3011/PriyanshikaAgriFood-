'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Image 
              src="/assets/images/LOGO.jpeg" 
              alt="Priyanshika Agri Foods Logo" 
              width={80} 
              height={80} 
              className={styles.logoImage} 
            />
            <h2>Priyanshika Agri Foods</h2>
          </div>
          
          <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <Link href="/#home" className={styles.navLink}>Home</Link>
            <Link href="/#about" className={styles.navLink}>About Us</Link>
            <Link href="/#products" className={styles.navLink}>Products</Link>
            <Link href="/#contact" className={styles.navLink}>Contact</Link>
          </nav>
          
          <div className={styles.navActions}>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Sign In</button>
            <button className={styles.btn}>Get Started</button>
          </div>
          
          <button className={styles.menuToggle} onClick={toggleMenu}>
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