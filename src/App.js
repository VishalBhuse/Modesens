import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

import Likes from "./Component/Likes";

import Products from "./Component/productspage/Products";
import Homeindex from "./Component/Homeindex";
import { AuthContextProvider } from "./Component/Context/AuthContext";
// import { Filters } from "./Component/productspage/Filters";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product/:category/:productid" element={<Product />} />
      </Routes>

      <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
