import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

<<<<<<< HEAD
=======

>>>>>>> 968a6ff37d6b7841303d5f6363dff1ff2ec183d4
import Dashboard from "./Component/Dashboard";
import Products from "./Component/productspage/Products";
import Homeindex from "./Component/Homeindex";
import Likes from "./Component/Likes";
import Invite from "./Component/Invite";

import { AuthContextProvider } from "./Component/Context/AuthContext";
<<<<<<< HEAD
=======

// import { Filters } from "./Component/productspage/Filters";

import Invite from "./Component/Invite";

>>>>>>> 968a6ff37d6b7841303d5f6363dff1ff2ec183d4
import Product from "./Component/Product/Product";
import Quickview from "./Component/QuickView/Quickview";
import Settings from "./Component/Settings/Settings";
import Recent from "./Component/Recent/Recent";
import Alerts from "./Component/Alerts/Alerts";
import RecentQuickview from "./Component/QuickView/RecentQuickview";
import RecentProduct from "./Component/Product/RecentProduct";
import AlertQuickview from "./Component/QuickView/AlertQuickview";
import AlertProduct from "./Component/Product/AlertProduct";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homeindex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="invite" element={<Invite/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:id" element={<Products />}>
            <Route
              path="/products/:id/quickview/:category/:productid"
              element={<Quickview />}
            ></Route>
          </Route>
          <Route path="/product/:category/:productid" element={<Product />} />
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/recent" element={<Recent />}>
            <Route
              path="/recent/recentquickview/:id"
              element={<RecentQuickview />}
            ></Route>
          </Route>
          <Route path="/alerts" element={<Alerts />}>
            <Route
              path="/alerts/alertquickview/:id"
              element={<AlertQuickview />}
            ></Route>
          </Route>
          <Route path="/recentproduct/:id" element={<RecentProduct />}></Route>
          <Route path="/alertproduct/:id" element={<AlertProduct />}></Route>
        </Routes>

        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
