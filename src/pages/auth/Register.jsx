import React, { useState } from "react";
import style from "./style/register.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let [data, setData] = useState({
    email: "",
    fullname: "",
    password: "",
    role: "",
  });

  let change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let navigate = useNavigate();

  let submit = (e) => {
    axios
      .post("http://localhost:2525/users/register", data)
      .then((res) => {
        alert("Register success");
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
            <img src={require("../../assets/image/Group 1158.png")} />
          </div>
          <div className={`${style.text}`}>
            <p>Register your new account</p>
          </div>
          <div
            className="btn-group btn-group-toggle"
            data-toggle="buttons"
            style={{ width: "250px", margin: "0 auto" }}
          >
            <label className="btn" style={{ width: "50%", backgroundColor: "#db3022" }}>
              <input
                type="radio"
                name="role"
                id="option1"
                onChange={change}
                value={"customer"}
              />{" "}
              Costumer
            </label>
            <label className="btn" style={{ width: "50%", backgroundColor: "#efefef" }}>
              <input
                type="radio"
                name="role"
                id="option2"
                onChange={change}
                value={"seller"}
              />{" "}
              Seller
            </label>
          </div>
          {/* <ul
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
          </ul> */}
          <section className="tab-content">
            <div className="tab-pane fade show active" id="customer">
              <div className={`${style.register}`}>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Name"
                  onChange={change}
                />
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
              <div className={`${style.button}`}>
                <button onClick={submit}>SIGN UP</button>
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
            {/* <div className="tab-pane fade" id="seller">
              <div className={`${style.register}`}>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Name"
                  onChange={change}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={change}
                />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Store Name" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={change}
                />
              </div>
              <div className={`${style.button}`}>
                <button>SIGN UP</button>
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
            </div> */}
          </section>
        </section>
      </div>
    </>
  );
};

export default Register;
