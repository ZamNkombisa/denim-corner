import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext); // Access the list of all products from the context

  return (
    <div className="shop-category">
      {/* Display the range of products being shown */}
      <div className="shopcategory-indexSort">
        <p>Showing 1-9 products</p>
      </div>
      {/* Display products that match the selected category */}
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i} // Unique key for each item
                id={item.id} // Pass product ID to the Item component
                name={item.name} // Pass product name to the Item component
                image={item.image} // Pass product image to the Item component
                price={item.price} // Pass product price to the Item component
              />
            );
          } else {
            return null; // Return null if the product does not match the category
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
