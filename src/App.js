import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
// import Products from "./Component/Products";
import Product from "./Component/Product";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Demo from "./Component/Demo";
import { Filters } from "./Component/productspage/Filters";
import Products from "./Component/productspage/Products";

function App() {
  return (
    <>
      <Navbar />
      {/* <Filters/> */}
      <Products />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
