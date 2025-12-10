import { useState } from "react";
import "./Home.css";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import QuotePopup from "../../components/QuotePopup/QuotePopup";
import ContactSection from "../../components/HomeContact/ContactSection";

import soket from "../../assets/soket.jpg";
import S1 from "../../assets/S1.jpg";
import S2 from "../../assets/S2.jpg";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    { image: soket, name: "Flameproof Drive Panel" },
    { image: S1, name: "Flameproof Vessel Lamp" },
    { image: S2, name: "Flameproof Rotary Switch" },
    { image: soket, name: "Flameproof Plug Socket" },
    { image: S1, name: "Flameproof Temperature Indicator" },
    { image: soket, name: "Flameproof Drive Panel" },
    { image: S1, name: "Flameproof Vessel Lamp" },
    { image: S2, name: "Flameproof Rotary Switch" },
    { image: soket, name: "Flameproof Plug Socket" },
    { image: S1, name: "Flameproof Temperature Indicator" },
  ];

  const openPopup = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
    document.body.classList.add("blur-active");
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.classList.remove("blur-active");
  };

  return (
    <>
      {/* Blur wrapper */}
      <div className={popupOpen ? "home-blur" : ""}>
        <section className="featured-products">
          <ProductCarousel products={products} onQuote={openPopup} />
        </section>
      </div>

      {/* Popup */}
      <QuotePopup
        isOpen={popupOpen}
        onClose={closePopup}
        productName={selectedProduct}
      />

      <section className="about-section">
        <h2>About Us</h2>

        <p className="about-text">
          Established in the year <strong>2025</strong> at{" "}
          <strong>Mumbai, Maharashtra</strong>, We{" "}
          <strong>“Riddhi Control System”</strong> are a{" "}
          <strong>Sole Proprietorship</strong> based firm, engaged as the
          foremost <strong>Manufacturer</strong> of
          <strong> Flameproof Panel, Push Button, etc.</strong> Our products are
          high in demand due to their premium quality and affordable prices.
          Furthermore, we ensure timely delivery of these products to our
          clients, through which we have gained a huge client base in the
          market.
          <br />
          <br />
          <a href="#" className="read-more">
            + Read More
          </a>
        </p>

        <div className="about-info-grid">
          <div className="about-card">
            <div className="icon-circle">💰</div>
            <p className="info-title">Nature of Business</p>
            <p className="info-value">Manufacturer</p>
          </div>

          <div className="about-card">
            <div className="icon-circle">⚖️</div>
            <p className="info-title">Legal Status of Firm</p>
            <p className="info-value">Proprietorship</p>
          </div>

          <div className="about-card">
            <div className="icon-circle">🏢</div>
            <p className="info-title">Annual Turnover</p>
            <p className="info-value">10 - 50 lakh</p>
          </div>

          <div className="about-card">
            <div className="icon-circle">🗓️</div>
            <p className="info-title">GST Registration Date</p>
            <p className="info-value">05-08-2025</p>
          </div>

          <div className="about-card">
            <div className="icon-circle">👥</div>
            <p className="info-title">Total Number of Employees</p>
            <p className="info-value">Upto 05 People</p>
          </div>

          <div className="about-card">
            <div className="icon-circle">📄</div>
            <p className="info-title">GST Number</p>
            <p className="info-value">27BNBPR9945J1ZA</p>
          </div>
        </div>
      </section>

      {/* ------------------------------
    FIXED PRODUCT GRID (2 ROW × 4 COLUMN)
------------------------------ */}
      <section className="home-product-grid">
        <h2 className="section-title">Our Products</h2>

        <div className="grid-container">
          {products.slice(0, 8).map((product, index) => (
            <div
              className="product-card"
              key={index}
              onClick={() => openPopup(product.name)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <p className="product-name">{product.name}</p>

              <button className="details-btn">View Details →</button>
            </div>
          ))}
        </div>

        <div className="view-range-container">
          <button className="view-range-btn">View Complete Range</button>
        </div>
      </section>

      {/* ------------------------------
    RATINGS & REVIEWS SECTION
------------------------------ */}
      <section className="ratings-reviews-section">
        <h2 className="ratings-title">Ratings & Reviews</h2>

        <div className="ratings-container">
          {/* LEFT SIDE SUMMARY */}
          <div className="rating-summary">
            <h1 className="rating-score">
              5<span>/5</span>
            </h1>

            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="rating-count">1 Ratings</p>
          </div>

          {/* RIGHT SIDE BAR GRAPH */}
          <div className="rating-bars">
            {[
              { star: "5 star", count: 2 },
              { star: "4 star", count: 0 },
              { star: "3 star", count: 0 },
              { star: "2 star", count: 0 },
              { star: "1 star", count: 0 },
            ].map((item, idx) => (
              <div key={idx} className="bar-row">
                <span>{item.star}</span>
                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${item.count * 100}%` }}
                  ></div>
                </div>
                <span className="bar-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS LIST */}
        <h3 className="review-header">Most Relevant Reviews</h3>

        <div className="review-card">
          <div className="review-avatar">S</div>

          <div className="review-content">
            <p className="review-name">
              <strong>Shubham</strong> <span>| Mumbai, Maharashtra</span>
            </p>

            <p className="review-stars">⭐⭐⭐⭐⭐</p>

            <p className="review-details">
              <span>1-December-25</span> |
              <span> Product Name : Flameproof Junction Boxes</span>
            </p>
          </div>

          <div className="review-avatar">S</div>

          <div className="review-content">
            <p className="review-name">
              <strong>Saurabh</strong> <span>| Gorakhpur, Uttar Pradesh</span>
            </p>

            <p className="review-stars">⭐⭐⭐⭐⭐</p>

            <p className="review-details">
              <span>2-December-25</span> |
              <span> Product Name : Flameproof Temperature Indicator</span>
            </p>
          </div>
        </div>
      </section>

      {/* Other Home Sections */}
      <ContactSection />
      <Footer />
    </>
  );
}
