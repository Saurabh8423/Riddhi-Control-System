import React, { useEffect, useState } from 'react';
import './Home.css';  
import ProductCard from '../../components/ProductCard/ProductCard';
import Carousel from '../../components/Carousel/Carousel';
import RatingBlock from '../../components/Rating/Rating';
import Chatbot from '../../components/Chatbot/Chatbot';
import api from '../../api/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <Carousel items={products.slice(0, 8)} />
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Established in 2011 at Mumbai, Riddhi Control System is a manufacturer of Flameproof Panels...
        </p>
      </section>

      {/* Our Products */}
      <section className="products-section">
        <h2>Our Products</h2>

        <div className="products-grid">
          {products.slice(0, 4).map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        <div className="see-more">
          <a href="/products">See more</a>
        </div>
      </section>

      {/* Ratings */}
      <section className="ratings-section">
        <h2>Ratings & Reviews</h2>
        <RatingBlock />
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in touch with us</h2>

        <div className="contact-grid">
          <div>Company info + address + actions</div>
          <div>Send SMS / Send Email buttons</div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
}
