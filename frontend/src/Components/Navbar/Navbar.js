import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/denim_corner.png";
import cart from "../Assets/cart-icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Denim Corner" />
        <p>DENIM CORNER</p>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>

      {/* Full-Screen Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <span className="close-menu" onClick={toggleMenu}>
          ×
        </span>
        <li onClick={toggleMenu}>
          <Link to="/">Shop</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/mens">Men</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/womens">Women</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      {/* Cart */}
      <div className="nav-cart">
        <Link to="/cart">
          <img src={cart} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
