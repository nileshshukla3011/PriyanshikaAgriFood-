'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Premium Agricultural Products for a Sustainable Future</h1>
            <p className={styles.heroSubtitle}>
              Priyanshika Agri Foods delivers high-quality agricultural products sourced directly from farmers, 
              ensuring freshness, sustainability, and fair trade practices.
            </p>
            <div className={styles.heroCta}>
              <Link href="/#products" className={styles.btnPrimary}>Explore Products</Link>
              <Link href="/#contact" className={styles.btnOutline}>Contact Us</Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/assets/images/hero-image.jpg" 
              alt="Agricultural Products" 
              width={600} 
              height={400}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;