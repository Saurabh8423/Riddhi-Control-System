import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductCarousel({ products = [], onQuote }) {
  const [index, setIndex] = useState(0);

  const itemsToShow = 5; // SHOW 5 ITEMS IN DESKTOP
  const totalItems = products.length;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 > totalItems - itemsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? totalItems - itemsToShow : prev - 1
    );
  };

  return (
    <div className="product-carousel-container">
      <button className="carousel-arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="slide-wrapper">
        <div
          className="slide-track"
          style={{
            transform: `translateX(-${(index * 100) / itemsToShow}%)`,
          }}
        >
          {products.map((p, idx) => (
            <div className="single-slide" key={idx}>
              <ProductCard image={p.image} name={p.name} onQuote={onQuote} />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
