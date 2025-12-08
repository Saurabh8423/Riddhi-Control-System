import React, { useState, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="carousel-container">
      <img
        src={images[index]}
        alt="slide"
        className="carousel-image"
      />

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${idx === index ? "active" : ""}`}
            onClick={() => setIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}
