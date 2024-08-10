// Import of product images displayed in the homepage
import p1_image from "./Men/product_1.jpg";
import p12_image from "./Ladies/product_12.webp";
import p13_image from "./Ladies/product_13.webp";
import p26_image from "./Kids/product_26.jpg";

// Product images displayed in the homepage
let data_product = [
  {
    id: 1,
    name: "Long Sleeve Denim Jacket",
    category: "men",
    image: p1_image,
    price: 900,
  },
  {
    id: 12,
    name: "Boyfriend Ripped Knee Denim",
    category: "women",
    image: p12_image,
    price: 480,
  },
  {
    id: 13,
    name: "Blue Denim Knee Skirt",
    category: "women",
    image: p13_image,
    price: 390,
  },
  {
    id: 26,
    name: "Girls Blue Denim Dungaree",
    category: "kids",
    image: p26_image,
    price: 220,
  },
];

export default data_product;
