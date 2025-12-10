import React from "react";
import Sidebar from "./Sidebar";
import ProductSlider from "./ProductSlider";
import AlbumSlider from "./AlbumSlider";
import Factsheet from "./Factsheet";
// import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT MAIN CONTENT */}
      <div className="about-main">

        {/* Our Products Slider */}
        <h2 className="section-title">Our Products</h2>
        <ProductSlider />

        {/* Company Details */}
        <div className="company-details">
          <h2>Riddhi Control System</h2>
          <p>
            Established in the year <strong>2025</strong> at 
            <strong> Mumbai, Maharashtra</strong>, we 
            <strong> Riddhi Control System</strong> are a 
            <strong> Sole Proprietorship</strong> based firm, engaged as the
            foremost Manufacturer of Flameproof Panel, Push Button, etc.
          </p>
          <p>
            Our products are high in demand due to their premium quality and
            affordable prices. Furthermore, we ensure timely delivery of these
            products to our clients.
          </p>
        </div>

        {/* Company Album */}
        <h2 className="section-title">Company Album</h2>
        <AlbumSlider />

        {/* Factsheet */}
        <Factsheet />
      </div>
    </div>
  );
};

export default About;
