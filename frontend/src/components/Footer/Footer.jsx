import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-title">Riddhi Control Systems</h3>
          <p className="footer-text">
            Leading manufacturer of flameproof control panels, junction boxes 
            and industrial electrical solutions.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Downloads</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-subtitle">Contact</h4>
          <p className="footer-text">📍 Mumbai, Maharashtra</p>
          <p className="footer-text">📞 +91 9172099438</p>
          <p className="footer-text">📧 pradeeppanel92@gmail.com</p>

          {/* SOCIAL ICONS */}
          <div className="footer-social">
            <a href="#" className="social-icon instagram">
              <FaInstagram />
            </a>

            <a href="#" className="social-icon facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="social-icon twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Riddhi Control Systems — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
