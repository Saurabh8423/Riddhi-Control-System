import React, { useState } from "react";
import "./Photos.css";
import { FaTimes } from "react-icons/fa";
import img1 from "../../assets/soket.jpg";
import img2 from "../../assets/S1.jpg";
import img3 from "../../assets/S2.jpg";
import ContactSection from "../../components/HomeContact/ContactSection";

const products = [
  {
    id: 1,
    name: "Flameproof AC Drive Panel",
    price: "₹ 5,500 / PIECE",
    img: img1,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Flameproof And Weatherproof Panel",
    price: "₹ 10,000 / Unit",
    img: img2,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Flameproof And Weatherproof Panel",
    price: "₹ 10,000 / Unit",
    img: img3,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 4,
    name: "Flameproof Square Control Panel",
    price: "₹ 5,000 / Unit",
    img: img1,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },

  {
    id: 1,
    name: "Flameproof AC Drive Panel",
    price: "₹ 5,500 / PIECE",
    img: img1,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Flameproof And Weatherproof Panel",
    price: "₹ 10,000 / Unit",
    img: img2,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Flameproof And Weatherproof Panel",
    price: "₹ 10,000 / Unit",
    img: img3,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
  {
    id: 4,
    name: "Flameproof Square Control Panel",
    price: "₹ 5,000 / Unit",
    img: img1,
    seller: "Rajesh Control System",
    location: "Mumbai",
  },
];

const Photos = () => {
  const [selected, setSelected] = useState(null);
  const [mobile, setMobile] = useState("");

  const openPopup = (product) => {
    setSelected(product);
  };

  const closePopup = () => {
    setSelected(null);
    setMobile("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Enter valid 10-digit number");
      return;
    }
    alert("Your request submitted!");
    closePopup();
  };

  return (
    <div className="photos-section">
      <h2>Photos</h2>

      <div className="photo-grid">
        {products.map((item) => (
          <div key={item.id} className="photo-card">
            <img src={item.img} alt={item.name} className="photo-img" />

            <h3 className="product-title">{item.name}</h3>

            <p className="product-price">{item.price}</p>

            <button className="quote-btn" onClick={() => openPopup(item)}>
              Get Best Quote
            </button>
          </div>
        ))}
      </div>

      {/* ---------- POPUP ---------- */}
      {selected && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={closePopup}>
              <FaTimes />
            </button>

            <div className="popup-left">
              <img src={selected.img} alt="" className="popup-img" />
              <h3>{selected.name}</h3>

              <p className="seller-text">
                Sold By – <strong>{selected.seller}</strong>,{" "}
                {selected.location}
              </p>
            </div>

            <div className="popup-right">
              <h2>
                Get Best Quote from "{selected.seller}" on your mobile quickly
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mobile-box">
                  <span className="country-code">+91</span>
                  <input
                    type="number"
                    placeholder="Enter your mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-popup">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}


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

    </div>
    
  );
};

export default Photos;
