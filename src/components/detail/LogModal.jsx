import React, { useState } from "react";
import style from "./logmodal.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const LogModal = () => {
  const [customerdata, setCustomerdata] = useState({
    customer_email: "",
    customer_password: "",
  });

  const customerchange = (e) => {
    setCustomerdata({
      ...customerdata,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

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
      <div className="modal fade" id="tologin" style={{ color: "black" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h3 className="d-flex justify-content-center">
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
                  <section className="tab-content">
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
                      <button onClick={customersubmit} data-dismiss="modal">LOGIN</button>
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
                  </section>
                </section>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogModal;
