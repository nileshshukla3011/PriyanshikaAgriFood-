import React from 'react';
import './Products.css';

const Products = () => {
  const productCategories = [
    {
      title: 'Fresh Vegetables',
      icon: '🥬',
      products: [
        'Organic Tomatoes',
        'Fresh Spinach',
        'Bell Peppers',
        'Cucumbers',
        'Carrots',
        'Onions'
      ]
    },
    {
      title: 'Grains & Cereals',
      icon: '🌾',
      products: [
        'Basmati Rice',
        'Wheat Flour',
        'Corn',
        'Barley',
        'Oats',
        'Quinoa'
      ]
    },
    {
      title: 'Fruits',
      icon: '🍎',
      products: [
        'Fresh Apples',
        'Bananas',
        'Oranges',
        'Mangoes',
        'Grapes',
        'Pomegranates'
      ]
    },
    {
      title: 'Spices & Herbs',
      icon: '🌶️',
      products: [
        'Turmeric Powder',
        'Cumin Seeds',
        'Coriander',
        'Black Pepper',
        'Cardamom',
        'Bay Leaves'
      ]
    },
    {
      title: 'Dairy Products',
      icon: '🥛',
      products: [
        'Fresh Milk',
        'Yogurt',
        'Paneer',
        'Butter',
        'Ghee',
        'Cheese'
      ]
    },
    {
      title: 'Pulses & Legumes',
      icon: '🫘',
      products: [
        'Lentils',
        'Chickpeas',
        'Black Beans',
        'Green Peas',
        'Kidney Beans',
        'Soybeans'
      ]
    }
  ];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Premium quality agricultural products sourced directly from trusted farmers.
          </p>
        </div>
        
        <div className="products-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="product-list">
                {category.products.map((product, productIndex) => (
                  <li key={productIndex} className="product-item">
                    <span className="product-check">✓</span>
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="quality-assurance">
          <h3>Quality Assurance</h3>
          <div className="quality-features">
            <div className="quality-item">
              <span className="quality-icon">🔍</span>
              <h4>Rigorous Testing</h4>
              <p>Every product undergoes strict quality checks</p>
            </div>
            <div className="quality-item">
              <span className="quality-icon">🌱</span>
              <h4>Organic Certified</h4>
              <p>100% organic and chemical-free products</p>
            </div>
            <div className="quality-item">
              <span className="quality-icon">🚚</span>
              <h4>Fresh Delivery</h4>
              <p>Direct from farm to your doorstep</p>
            </div>
            <div className="quality-item">
              <span className="quality-icon">🏆</span>
              <h4>Premium Quality</h4>
              <p>Only the finest products make it to you</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h3>Ready to Order?</h3>
          <p>Contact us today to place your order or learn more about our products.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-secondary">Download Catalog</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
