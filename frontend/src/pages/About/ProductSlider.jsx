import React from "react";
import "./About.css";

const products = [
  { name: "Flameproof Panel", img: "/img/p1.png", count: "4 products" },
  { name: "Flameproof Socket", img: "/img/p2.png", count: "2 products" },
  { name: "Junction Box", img: "/img/p3.png", count: "3 products" },
  { name: "Electrical Enclosure", img: "/img/p4.png", count: "1 product" },
  { name: "Temperature Indicator", img: "/img/p5.png", count: "1 product" },
  { name: "Motor Starter", img: "/img/p6.png", count: "1 product" },
  { name: "Push Button", img: "/img/p7.png", count: "2 products" },
];

const ProductSlider = () => {
  return (
    <div className="horizontal-slider">
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={p.img} alt={p.name} />
          <h4>{p.name}</h4>
          <p>{p.count} available</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
