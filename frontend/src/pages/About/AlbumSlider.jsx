import React from "react";
import "./About.css";

const images = [
  "/img/c1.jpg",
  "/img/c2.jpg",
  "/img/c3.jpg",
  "/img/c4.jpg",
  "/img/c5.jpg",
];

const AlbumSlider = () => {
  return (
    <div className="horizontal-slider">
      {images.map((img, i) => (
        <div key={i} className="album-card">
          <img src={img} alt="album" />
        </div>
      ))}
    </div>
  );
};

export default AlbumSlider;
