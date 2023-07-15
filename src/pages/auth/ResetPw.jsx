import React from "react";
import style from "./style/reset.module.css"
import { Link } from "react-router-dom";

const ResetPw = () => {
  return (
    <>
      <div className={`${style.body}`}>
        <section className={`${style.container}`}>
          <div className="title">
            <img src={require("../../assets/image/Group 1158.png")} />
          </div>
          <div className={`${style.text}`}>
            <p>Reset password</p>
          </div>
          <div style={{ color: "#db3022" }}>
            <p>You need to change your password to activate your account</p>
          </div>
          <div className={`${style.register}`}>
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirmation New Password" />
          </div>
          <div className={`${style.button}`}>
            <a href="./login.html">
              <Link to='/login'><button>NEXT</button></Link>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResetPw;
