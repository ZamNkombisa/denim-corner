import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      {/* Link to the individual product page using the product ID */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      {/* Display the product name */}
      <p>{props.name}</p>
      {/* Display the product price */}
      <div className="item-price">R {props.price}</div>
    </div>
  );
};

export default Item;
