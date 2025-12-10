import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const menuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable body scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="left">
          <img src={logo} alt="Riddhi Control" className="logo" />

          {/* Desktop search ONLY */}
          <div className="searchWrap desktopOnly">
            <input
              className="search"
              placeholder="Search products, e.g. Flameproof Panel"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktopNav">
          <NavLink to="/">Home</NavLink>

          <div className="dropdown">
            <NavLink to="/products">Our Products</NavLink>

            <div className="dropdownContent">
              <Link to="/products/panel">Flameproof Panel</Link>
              <Link to="/products/socket">Flameproof Socket</Link>
              <Link to="/products/junction">Junction Box</Link>
              <Link to="/products/enclosure">Electrical Enclosure</Link>
              <Link to="/products/rotary">Rotary Switch</Link>
              <Link to="/products/pushbutton">Push Button</Link>
              <Link to="/products/all">View All</Link>
            </div>
          </div>

          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/photos">Photos</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        {/* Mobile icons */}
        <div className="mobileActions">
          <FaSearch
            className="mobileSearchIcon"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          />
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Search Box */}
      {mobileSearchOpen && (
        <div className="mobileSearchBox">
          <input placeholder="Search products..." />
        </div>
      )}

      {/* MOBILE MENU */}
      <nav className={`mobileMenu ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Our Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/photos" onClick={() => setMenuOpen(false)}>Photos</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>
    </>
  );
}
