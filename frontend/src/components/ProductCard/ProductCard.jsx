import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, name, onQuote }) {
  return (
    <div className="pcard">
      <div className="pcard-img-wrap">
        <img src={image} alt={name} className="pcard-img" />
      </div>

      <div className="pcard-hover">
        {/* <h3>{name}</h3> */}
        <button className="quote-btn" onClick={() => onQuote(name)}>
          Get Best Quote
        </button>
      </div>

      <div className="pcard-title-bar">
        <p>{name}</p>
      </div>
    </div>
  );
}
