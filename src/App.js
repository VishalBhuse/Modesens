import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./Component/Products";
import Product from "./Component/Product";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Homeindex from "./Component/Homeindex";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeindex />} />
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
