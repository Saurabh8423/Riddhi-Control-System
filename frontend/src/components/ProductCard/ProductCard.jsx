import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="pcard">
      <div className="pcard-img-wrap">
        <img src={image} alt={name} className="pcard-img" />
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title">{name}</h3>

        {price && <p className="pcard-price">₹{price}</p>}

        <button className="pcard-btn">View Details</button>
      </div>
    </div>
  );
}
