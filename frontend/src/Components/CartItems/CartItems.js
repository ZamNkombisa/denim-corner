import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/remove.png";

const CartItems = () => {
  // Destructuring values from ShopContext to use in the component
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      {/* Header for the cart items table */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Iterate over all products and display the ones that are in the cart */}
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              {/* Display individual cart item details */}
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>R{e.price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>R{e.price * cartItems[e.id]}</p>
                {/* Remove item from cart when clicked */}
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      {/* Cart summary section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            {/* Subtotal of all the items in the cart */}
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>R{getTotalCartAmount()}</p>
            </div>
            <hr />
            {/* Shipping fee section */}
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            {/* Total amount due */}
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R{getTotalCartAmount()}</h3>
            </div>
          </div>
          {/* Button to proceed to checkout */}
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
