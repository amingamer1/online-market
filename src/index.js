import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/ProductsPage";
import Cart from "./Pages/Cart";
import LoginPage from "./Pages/LogInPage";
import AddprodoctsPage from "./Pages/AddProdoctsPage";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Assets/Styles/index.css";
import "./Assets/Fonts/Vazir.eot";
import "./Assets/Fonts/Vazir.ttf";
import "./Assets/Fonts/Vazir.woff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Provider } from "react-globally";
import Layout from "./Components/Layout";
// ------------------ Imports -------------------

const intialstate = {
  totalOrder: 0,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route path="/" element={<Home />} exac />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-prodocts-page" element={<AddprodoctsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider globalState={intialstate}>
    <App />
  </Provider>
);
