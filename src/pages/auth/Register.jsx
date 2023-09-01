import React, { useState } from "react";
import style from "./style/register.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  // seller
  const [sellerdata, setSellerdata] = useState({
    seller_fullname: "",
    seller_email: "",
    seller_password: "",
    seller_phone: "",
    store_name: "",
    store_description: "",
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
      .post(`${process.env.REACT_APP_API_KEY}/seller/register`, sellerdata)
      .then((res) => {
        alert("Register success");
        Swal.fire("Success", "Register success", "success");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // customer
  const [customerdata, setCustomerdata] = useState({
    customer_fullname: "",
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
      .post(`${process.env.REACT_APP_API_KEY}/customer/register`, customerdata)
      .then((res) => {
        Swal.fire("Success", "Register success", "success");
        navigate("/login");
      })
      .catch((err) => {
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
        {/* div{"{"}border:1px solid{"}"} */}
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
            <p>Register your new account</p>
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
                  type="text"
                  name="customer_fullname"
                  id="customer_fullname"
                  placeholder="Name"
                  onChange={customerchange}
                />
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
              <div className={`${style.button}`}>
                <button onClick={customersubmit}>SIGN UP</button>
              </div>
              <div className={`${style.toLogin}`}>
                <p>
                  Already have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/login">Login</Link>{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="tab-pane fade" id="seller">
              <div className={`${style.register}`}>
                <input
                  type="text"
                  name="seller_fullname"
                  id="seller_fullname"
                  placeholder="Name"
                  onChange={sellerchange}
                />
                <input
                  type="email"
                  name="seller_email"
                  id="seller_email"
                  placeholder="Email"
                  onChange={sellerchange}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="seller_phone"
                  id="seller_phone"
                  onChange={sellerchange}
                />
                <input
                  type="text"
                  placeholder="Store Name"
                  name="store_name"
                  id="store_name"
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
              <div className={`${style.button}`}>
                <button onClick={sellersubmit}>SIGN UP</button>
              </div>
              <div className={`${style.toLogin}`}>
                <p>
                  Already have a Blanja account?
                  <span>
                    {" "}
                    <Link to="/login">Login</Link>{" "}
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

export default Register;
