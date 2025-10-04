import React from 'react';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.subtitle}>
          Premium quality agricultural products sourced directly from trusted farmers.
        </p>
        
        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🥬</div>
            <h3>Fresh Vegetables</h3>
            <ul className={styles.productList}>
              <li>✓ Organic Tomatoes</li>
              <li>✓ Fresh Spinach</li>
              <li>✓ Bell Peppers</li>
              <li>✓ Cucumbers</li>
              <li>✓ Carrots</li>
              <li>✓ Onions</li>
            </ul>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🌾</div>
            <h3>Grains & Cereals</h3>
            <ul className={styles.productList}>
              <li>✓ Basmati Rice</li>
              <li>✓ Wheat Flour</li>
              <li>✓ Corn</li>
              <li>✓ Barley</li>
              <li>✓ Oats</li>
              <li>✓ Quinoa</li>
            </ul>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🍎</div>
            <h3>Fruits</h3>
            <ul className={styles.productList}>
              <li>✓ Fresh Apples</li>
              <li>✓ Bananas</li>
              <li>✓ Oranges</li>
              <li>✓ Mangoes</li>
              <li>✓ Grapes</li>
              <li>✓ Pomegranates</li>
            </ul>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🌶️</div>
            <h3>Spices & Herbs</h3>
            <ul className={styles.productList}>
              <li>✓ Turmeric Powder</li>
              <li>✓ Cumin Seeds</li>
              <li>✓ Coriander</li>
              <li>✓ Black Pepper</li>
              <li>✓ Cardamom</li>
              <li>✓ Bay Leaves</li>
            </ul>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🥛</div>
            <h3>Dairy Products</h3>
            <ul className={styles.productList}>
              <li>✓ Fresh Milk</li>
              <li>✓ Yogurt</li>
              <li>✓ Paneer</li>
              <li>✓ Butter</li>
              <li>✓ Ghee</li>
              <li>✓ Cheese</li>
            </ul>
          </div>
          
          <div className={styles.productCard}>
            <div className={styles.productIcon}>🫘</div>
            <h3>Pulses & Legumes</h3>
            <ul className={styles.productList}>
              <li>✓ Lentils</li>
              <li>✓ Chickpeas</li>
              <li>✓ Black Beans</li>
              <li>✓ Green Peas</li>
              <li>✓ Kidney Beans</li>
              <li>✓ Soybeans</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.qualityAssurance}>
          <h3>Quality Assurance</h3>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityItem}>
              <div className={styles.qualityIcon}>🔍</div>
              <h4>Rigorous Testing</h4>
              <p>Every product undergoes strict quality checks</p>
            </div>
            <div className={styles.qualityItem}>
              <div className={styles.qualityIcon}>🌱</div>
              <h4>Organic Certified</h4>
              <p>100% organic and chemical-free products</p>
            </div>
            <div className={styles.qualityItem}>
              <div className={styles.qualityIcon}>🚚</div>
              <h4>Fresh Delivery</h4>
              <p>Direct from farm to your doorstep</p>
            </div>
            <div className={styles.qualityItem}>
              <div className={styles.qualityIcon}>🏆</div>
              <h4>Premium Quality</h4>
              <p>Only the finest products make it to you</p>
            </div>
          </div>
        </div>
        
        <div className={styles.cta}>
          <h3>Ready to Order?</h3>
          <p>Contact us today to place your order or learn more about our products.</p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaButton}>Contact Us</a>
            <a href="#" className={styles.ctaButtonOutline}>Download Catalog</a>
          </div>
        </div>
      </div>
    </section>
  );
}