import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Login from "./Component/Login";

<<<<<<< HEAD
import Dashboard from "./Component/Dashboard"

=======
import Dashboard from "./Component/Dashboard";
import Products from "./Component/productspage/Products";
import Homeindex from "./Component/Homeindex";
>>>>>>> 6cd80f72e462bb0223e53e8b26d64382969b2036
import Likes from "./Component/Likes";

import { AuthContextProvider } from "./Component/Context/AuthContext";
<<<<<<< HEAD
// import { Filters } from "./Component/productspage/Filters";

import Invite from "./Component/Invite";
=======

>>>>>>> 6cd80f72e462bb0223e53e8b26d64382969b2036
import Product from "./Component/Product/Product";
import Quickview from "./Component/QuickView/Quickview";
import Settings from "./Component/Settings/Settings";
import Recent from "./Component/Recent/Recent";
import Alerts from "./Component/Alerts/Alerts";
import RecentQuickview from "./Component/QuickView/RecentQuickview";
import RecentProduct from "./Component/Product/RecentProduct";

function App() {
  return (
    <>
<<<<<<< HEAD
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeindex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invite" element={<Invite/>}/>
        <Route path="/likes" element={<Likes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:id" element={<Products />}>
          <Route path="/products/:id/quickview/:category/:productid" element={<Quickview/>}></Route>
        </Route>
        <Route path="/product/:category/:productid" element={<Product />} />
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/recent" element={<Recent/>}>
          <Route path="/recent/recentquickview/:id" element={<RecentQuickview/>} ></Route>
        </Route>
        <Route path="/alerts" element={<Alerts/>}>
        <Route path="/alerts/recentquickview/:id" element={<RecentQuickview/>} ></Route>
        </Route>
        <Route path="/recentproduct/:id" element={<RecentProduct/>}></Route>
      </Routes>
=======
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homeindex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/likes" element={<Likes />} />
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
              path="/alerts/recentquickview/:id"
              element={<RecentQuickview />}
            ></Route>
          </Route>
          <Route path="/recentproduct/:id" element={<RecentProduct />}></Route>
        </Routes>
>>>>>>> 6cd80f72e462bb0223e53e8b26d64382969b2036

        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
