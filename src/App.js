import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./components/Home/Home";
import ProductCategory from "./components/Products/ProductCategory";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
// import appcss from "./App.module.css"
import Details from "./components/Products/Details";
import Cart from "./components/Products/Cart";
import BuyNow from "./components/Products/BuyNow";
// import {} "@auth0/auth0-react/google"
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const clientid =
    "488791191740-41u9gjhu8vtak8it7f5neferohrt2si3.apps.googleusercontent.com";
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientid}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/cart" element={<Cart />} />
          <Route path="/buynow" element={<BuyNow />} />
        </Routes>
        <Footer />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
