import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Riddhi Control" className="logo" />

        <div className="searchWrap">
          <input
            className="search"
            placeholder="Search products, e.g. Flameproof Panel"
          />
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>

        <div className="dropdown">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Our Products
          </NavLink>

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
    </header>
  );
}
