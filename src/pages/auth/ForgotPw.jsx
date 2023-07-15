import React from "react";
import style from "./style/forgot.module.css"
import { Link } from "react-router-dom";

const ForgotPw = () => {
  return (
    <>
      <div className={`${style.body}`}>
        <section className={`${style.container}`}>
          <div className={`${style.title}`}>
            <img src={require("../../assets/image/Group 1158.png")} />
          </div>
          <div className={`${style.text}`}>
            <p>Reset password</p>
          </div>
          <div className={`${style.register}`}>
            <input type="text" placeholder="Email" />
          </div>
          <div className={`${style.button}`}>
            <a href="./resetpass.html">
              <Link to="/reset"><button>SEND</button></Link>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPw;
