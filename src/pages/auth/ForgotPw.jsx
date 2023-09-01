import React from "react";
import style from "./style/forgot.module.css";
import { Link } from "react-router-dom";

const ForgotPw = () => {
  return (
    <>
      <div className={`${style.body}`}>
        <section className={`${style.container}`}>
          <div className={`${style.title}`}>
            <img
              src={require("../../assets/image/Group 1158.png")}
              alt="logo"
            />
          </div>
          <div className={`${style.text}`}>
            <p>Reset password</p>
          </div>
          <div className={`${style.register}`}>
            <input type="text" placeholder="Email" />
          </div>
          <div className={`${style.button}`}>
            <Link to="/reset">
              <button>SEND</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPw;
