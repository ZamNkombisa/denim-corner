import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      {/* Render the Hero component, typically for featured promotions or banners */}
      <Hero />
      {/* Render the Popular component to display popular products */}
      <Popular />
      {/* Render the NewsLetter component to offer email subscription */}
      <NewsLetter />
    </div>
  );
};

export default Shop;
