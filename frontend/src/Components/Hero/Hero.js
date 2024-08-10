import React from "react";
import "./Hero.css";
import Male from "../Assets/Male.png";
import Female from "../Assets/Female.png";
import Kids from "../Assets/Kids.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      {/* Section for Men's fashion deals */}
      <div className="hero-left">
        <p>EXPLORE MEN's LATEST FASHION DEALS</p>
        <button>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Shop now
          </Link>
        </button>
      </div>
      {/* Section for Women's fashion deals */}
      <div className="hero-right">
        <img src={Male} alt="" />
      </div>
      <div className="hero-left">
        <p>EXPLORE WOMEN's DAZZLING FASHION DEALS</p>
        <button>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Shop now
          </Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={Female} alt="" />
      </div>
      {/* Section for Kids' fashion deals */}
      <div className="hero-left">
        <p>EXPLORE KIDS ADORABLE FASHION DEALS</p>
        <button>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Shop now
          </Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={Kids} alt="" />
      </div>
    </div>
  );
};

export default Hero;
