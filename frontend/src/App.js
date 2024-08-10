import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      {/* Set up routing for the application */}
      <BrowserRouter>
        {/* Render the Navbar component on all pages */}
        <Navbar />
        {/* Define routes and their corresponding components */}
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          {/* Route for the main shop page */}
          <Route path="/mens" element={<ShopCategory category="men" />} />{" "}
          {/* Route for the men's category */}
          <Route
            path="/womens"
            element={<ShopCategory category="women" />}
          />{" "}
          {/* Route for the women's category */}
          <Route path="/kids" element={<ShopCategory category="kids" />} />{" "}
          {/* Route for the kids' category */}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />{" "}
            {/* Route for individual product pages */}
          </Route>
          <Route path="/cart" element={<Cart />} />{" "}
          {/* Route for the cart page */}
        </Routes>
        {/* Render the Footer component on all pages */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
