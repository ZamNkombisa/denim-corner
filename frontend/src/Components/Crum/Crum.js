import React from "react";
import "./Crum.css";
import arrow_icon from "../Assets/arrow.png";

export const Crum = (props) => {
  const { product } = props; // Destructuring the product object from props
  return (
    <div className="crum">
      {/* Breadcrumb navigation showing the path to the current product */}
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
