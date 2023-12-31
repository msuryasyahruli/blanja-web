import React from "react";
import style from "./headerLog.module.css";
import { Link } from "react-router-dom";

const HeaderBeforeLog = () => {
  return (
    <>
      <header>
        <div className="container" style={{ padding: 0 }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <div className={`${style.logo}`}>
                <img src={require("../../assets/image/Group 1159.png")} alt="logo" />
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className={`${style.search}`}>
                <input type="text" placeholder="Search" />
                <img src={require("../../assets/image/Search Glyph.png")} alt="search" />
              </div>
              <form
                className="form-inline my-2 my-lg-0"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className={`${style.filter}`}>
                  <img src={require("../../assets/image/filter 1.png")} alt="filter" />
                </div>
                <div style={{ display: "flex" }}>
                  <div className={`${style.login}`}>
                    <Link to='/login'>Login</Link>
                  </div>
                  <div className={`${style.signup}`}>
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderBeforeLog;
