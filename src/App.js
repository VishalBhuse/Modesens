import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
<<<<<<< HEAD
import Likes from "./Component/Likes";
=======
import Products from "./Component/productspage/Products";
import Homeindex from "./Component/Homeindex";
// import { Filters } from "./Component/productspage/Filters";
>>>>>>> 68b7a48b7e52d2f31db8307ded3ea10cdf1236ca

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
