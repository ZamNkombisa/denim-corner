import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props; // Destructure the product prop
  const { addToCart } = useContext(ShopContext); // Get the addToCart function from the context

  return (
    <div className="productdisplay">
      {/* Left side: Image gallery of the product */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Display multiple images of the product */}
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          {/* Main product image */}
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      {/* Right side: Product details */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
      </div>
      {/* Size selection and pricing */}
      <div className="productdisplay-right-size">
        {/* Display product price */}
        <div className="productdisplay-right-prices">R {product.price}</div>
        <h1>Select Size</h1>
        {/* Display available sizes */}
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
        </div>
        {/* Button to add the product to the cart */}
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
