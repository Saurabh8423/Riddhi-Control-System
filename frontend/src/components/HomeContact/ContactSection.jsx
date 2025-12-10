import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-wrapper" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Our Company</h3>

          <ul className="contact-links">
            <li>About Us</li>
            <li>Our Products</li>
            <li>Contact Support</li>
            <li>Gallery</li>
            <li>Download Brochure</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Reach Us</h3>

          <div className="info-block">
            <span className="icon">📍</span>
            <p>
              <strong>Riddhi Control Systems</strong><br />
              Golani Naka, Vasai East, Vasai-Virar,<br />
              Mumbai - 401208, Maharashtra, India
            </p>
          </div>

          <a href="https://maps.app.goo.gl/fqJ7du1uMm3Ws26o8" className="map-link">📌 Get Directions</a>

          <div className="info-block">
            <span className="icon">👤</span>
            <p>Mr. Pradeep Katvaru Ravat (Owner)</p>
          </div>

          <div className="info-block">
            <span className="icon">📞</span>
            <p className="mobile-link">View Mobile Number</p>
          </div>

          <div className="btn-row">
            <button className="btn sms-btn">💬 Send SMS</button>
            <button className="btn email-btn">📧 Send Email</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
