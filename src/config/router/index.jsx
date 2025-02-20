import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login.jsx";
import Register from "../../pages/auth/Register.jsx";
import Page404 from "../../pages/Page404.jsx";
import ForgotPw from "../../pages/auth/ForgotPw.jsx";
import ResetPw from "../../pages/auth/ResetPw.jsx";
import Detail from "../../pages/Detail.jsx";
import Checkout from "../../pages/Checkout.jsx";
import Cart from "../../pages/Cart.jsx";
import Profile from "../../pages/profile/Profile.jsx";
import ProfileLayout from "../../components/profile/Layout.jsx";
import Product from "../../pages/profile/Product.jsx";
import Order from "../../pages/profile/Order.jsx";
import ShippingAddress from "../../pages/profile/ShippingAddress.jsx";
import LandingPage from "../../pages/index.jsx";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Page404 />} />

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="my-profile" element={<Profile />} />
            <Route path="product" element={<Product />} />
            <Route path="order" element={<Order />} />
            <Route path="my-account" element={<Profile />} />
            <Route path="shipping-address" element={<ShippingAddress />} />
            <Route path="my-order" element={<Order />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPw />} />
          <Route path="/reset" element={<ResetPw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
