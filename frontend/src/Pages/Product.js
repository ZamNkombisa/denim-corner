import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Crum } from "../Components/Crum/Crum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_products } = useContext(ShopContext); // Access the list of all products from the context
  const { productId } = useParams(); // Get the productId from the URL parameters
  const product = all_products.find((e) => e.id === Number(productId)); // Find the product matching the productId
  return (
    <div>
      {/* Render the Crum component to display the breadcrumb navigation */}
      <Crum product={product} />
      {/* Render the ProductDisplay component to show detailed information about the product */}
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
