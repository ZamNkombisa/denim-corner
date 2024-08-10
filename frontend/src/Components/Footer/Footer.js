import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/denim_corner.png";
import instagram_icon from "../Assets/instagram.png";
import x_icon from "../Assets/twitterx.png";
import whatsapp_icon from "../Assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer logo and company name */}
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>DENIM CORNER</p>
      </div>
      {/* Navigation links */}
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* Social media icons */}
      <div className="footer-social-icons">
        <img src={instagram_icon} alt="" />
        <img src={x_icon} alt="" />
        <img src={whatsapp_icon} alt="" />
        <div />
      </div>
      {/* Copyright section */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - Zamuxolo Nkombisa</p>
      </div>
    </div>
  );
};

export default Footer;
