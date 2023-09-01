import React, { useState } from "react";
import style from "./style/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  //seller
  const [sellerdata, setSellerdata] = useState({
    seller_email: "",
    seller_password: "",
  });

  const sellerchange = (e) => {
    setSellerdata({
      ...sellerdata,
      [e.target.name]: e.target.value,
    });
    // console.log(sellerdata);
  };

  const navigate = useNavigate();

  const sellersubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/seller/login`, sellerdata)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("sellerId", res.data.data.seller_id);
        localStorage.setItem("role", res.data.data.role);
        Swal.fire("Success", "Login success", "success");
        navigate("/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Account doesnt exist!",
        });
        console.log(err);
      });
  };

  //customer
  const [customerdata, setCustomerdata] = useState({
    customer_email: "",
    customer_password: "",
  });

  const customerchange = (e) => {
    setCustomerdata({
      ...customerdata,
      [e.target.name]: e.target.value,
    });
    // console.log(customerdata);
  };

  const customersubmit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/customer/login`, customerdata)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("customerId", res.data.data.customer_id);
        localStorage.setItem("role", res.data.data.role);
        Swal.fire("Success", "Login success", "success");
        navigate("/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Account doesnt exist!",
        });
        console.log(err);
      });
  };

  return (
    <>
      <style>
        .nav-item {"{"}
        margin: 5px;
        {"}"}
        .nav-pills .nav-link.active, .nav-pills .show &gt; .nav-link {"{"}
        color: #fff; background-color: #db3022;
        {"}"}
        .nav-pills .nav-link {"{"}
        width: 125px; height: 48px; background-color: #efefef; color: #9b9b9b;
        {"}"}
        @media only screen and (max-width: 576px) {"{"}
        .nav-pills .nav-link {"{"}
        width: 90px; height: 38px; padding: 0;
        {"}"}
        {"}"}
      </style>
      <div className={`${style.body}`}>
        <section className={`${style.container}`}>
          <div className={`${style.title}`}>
            <img
              src={require("../../assets/image/Group 1158.png")}
              alt="logo"
            />
          </div>
          <div className={`${style.text}`}>
            <p>Please login with your account</p>
          </div>
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                data-toggle="pill"
                data-target="#customer"
                type="button"
              >
                Customer
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-toggle="pill"
                data-target="#seller"
                type="button"
              >
                Seller
              </button>
            </li>
          </ul>
          <section className="tab-content">
            <div className="tab-pane fade show active" id="customer">
              <div className={`${style.register}`}>
                <input
                  type="email"
                  name="customer_email"
                  id="customer_email"
                  placeholder="Email"
                  onChange={customerchange}
                />
                <input
                  type="password"
                  name="customer_password"
                  id="customer_password"
                  placeholder="Password"
                  onChange={customerchange}
                />
              </div>
              <div className={`${style.Forgot}`}>
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                <button onClick={customersubmit}>LOGIN</button>
              </div>
              <div className={`${style.toRegist}`}>
                <p>
                  Don't have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="seller">
              <div className={`${style.register}`}>
                <input
                  type="email"
                  name="seller_email"
                  id="seller_email"
                  placeholder="Email"
                  onChange={sellerchange}
                />
                <input
                  type="password"
                  name="seller_password"
                  id="seller_password"
                  placeholder="Password"
                  onChange={sellerchange}
                />
              </div>
              <div className={`${style.Forgot}`}>
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                <button onClick={sellersubmit}>LOGIN</button>
              </div>
              <div className={`${style.toRegist}`}>
                <p>
                  Don't have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Login;
