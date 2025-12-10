import React, { useState } from "react";
import "./About.css";

const Sidebar = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="sidebar">

      <div className="sidebar-item" onClick={() => alert("Open Ratings Page")}>
        Testimonial
      </div>

      <h3 className="sidebar-title">Our Products</h3>

      {/* ----- Product Accordion Categories ----- */}
      {[
        { name: "Flameproof Panel", count: 4 },
        { name: "Flameproof Socket", count: 2 },
        { name: "Junction Box", count: 3 },
        { name: "Electrical Enclosure", count: 1 },
        { name: "Temperature Indicator", count: 1 },
        { name: "Motor Starter", count: 1 },
        { name: "Push Button", count: 2 },
        { name: "Rotary Switch", count: 1 },
      ].map((item, i) => (
        <div
          key={i}
          className="sidebar-accordion"
          onClick={() => toggle(i)}
        >
          <div className="accordion-header">
            {item.name}
            <span>{open === i ? "▲" : "▼"}</span>
          </div>

          {open === i && (
            <div className="accordion-body">
              {item.count} products available
            </div>
          )}
        </div>
      ))}

      <div className="view-all">+ View All</div>
    </div>
  );
};

export default Sidebar;
