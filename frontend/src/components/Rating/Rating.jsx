import React, { useState } from "react";
import "./Rating.css";

export default function Rating({ initial = 0, onRate }) {
  const [rate, setRate] = useState(initial);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRate(value);
    if (onRate) onRate(value); // send rating to backend
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${
            (hover || rate) >= star ? "filled" : ""
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
