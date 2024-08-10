import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/denim_corner.png";
import cart from "../Assets/cart-icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); // State to track the active menu item
  const { getTotalCartItems } = useContext(ShopContext); // Get the total number of items in the cart from the context

  return (
    <div className="navbar">
      {/* Logo and brand name */}
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>DENIM CORNER</p>
      </div>
      {/* Navigation menu */}
      <ul className="nav-menu">
        {/* Shop menu item */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {/* Highlight the active menu item */}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        {/* Men menu item */}
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        {/* Women menu item */}
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        {/* Kids menu item */}
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      {/* Cart icon with item count */}
      <div className="nav-cart">
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
        {/* Display the total number of items in the cart */}
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
