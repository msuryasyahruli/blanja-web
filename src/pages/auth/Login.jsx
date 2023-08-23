import React, { useState } from "react";
import style from "./style/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };
  
  let navigate = useNavigate()

  let submit = (e) => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/login`, data)
      .then((res) => {
        localStorage.setItem("token",res.data.data.token);
        alert("Login success");
        navigate("/home");
      })
      .catch((err) => {
        alert("Account doesn't exist")
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
            <img src={require("../../assets/image/Group 1158.png")} />
          </div>
          <div className={`${style.text}`}>
            <p>Please login with your account</p>
          </div>
          {/* <ul
            className="nav nav-pills mb-3 justify-content-center"
            role="tablist"
          > */}
            {/* <li className="nav-item">
              <button
                className="nav-link active"
                data-toggle="pill"
                data-target="#customer"
                type="button"
              >
                Customer
              </button>
            </li> */}
            {/* <li className="nav-item">
              <button
                className="nav-link"
                data-toggle="pill"
                data-target="#seller"
                type="button"
              >
                Seller
              </button>
            </li> */}
          {/* </ul> */}
          <section className="tab-content">
            <div className="tab-pane fade show active" id="customer">
              <div className={`${style.register}`}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={change}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={change}
                />
              </div>
              <div className={`${style.Forgot}`}>
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                  <button onClick={submit}>LOGIN</button>
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
            {/* <div className="tab-pane fade" id="seller">
              <div className={`${style.register}`}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={change}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={change}
                />
              </div>
              <div className={`${style.Forgot}`}>
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className={`${style.button}`}>
                  <button onClick={submit}>LOGIN</button>
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
            </div> */}
          </section>
        </section>
      </div>
    </>
  );
};

export default Login;
