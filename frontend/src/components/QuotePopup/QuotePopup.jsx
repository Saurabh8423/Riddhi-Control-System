import React from "react";
import "./QuotePopup.css";

export default function QuotePopup({ isOpen, onClose, productName }) {
  if (!isOpen) return null;

  return (
    <div className="qp-overlay">
      <div className="qp-modal">
        <h2>Get Best Quote</h2>
        <p>Product: <strong>{productName}</strong></p>

        <input type="text" placeholder="Your Name" className="qp-input" />
        <input type="text" placeholder="Phone Number" className="qp-input" />
        <textarea placeholder="Message" className="qp-textarea"></textarea>

        <button className="qp-submit">Submit</button>
        <button className="qp-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
