import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      {/* Heading for the popular denim fashion section */}
      <h1>POPULAR DENIM FASHION</h1>
      <hr />
      {/* Container for popular items */}
      <div className="popular-item">
        {/* Map over the data_product array to render each item */}
        {data_product.map((item, i) => {
          return (
            <Item
              key={i} // Unique key for each item
              id={item.id} // Pass product ID to the Item component
              name={item.name} // Pass product name to the Item component
              image={item.image} // Pass product image to the Item component
              price={item.price} // Pass product price to the Item component
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
