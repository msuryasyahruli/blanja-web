import React from "react";
import style from "./headerLog.module.css";
import { Link } from "react-router-dom";

const HeaderSeller = () => {
  return (
    <>
      <header>
        <div className="container" style={{ padding: 0 }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div>
              <div className={`${style.logo}`}>
                <Link to="/home">
                  <img
                    src={require("../../assets/image/Group 1159.png")}
                    alt="logo"
                  />
                </Link>
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
                <img
                  src={require("../../assets/image/Search Glyph.png")}
                  alt="search"
                />
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
                  <img
                    src={require("../../assets/image/filter 1.png")}
                    alt="filter"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <div className={`${style.cart}`}>
                    <img
                      src={require("../../assets/image/bell (1) 1.png")}
                      alt="cart"
                    />
                  </div>
                  <div className={`${style.cart}`}>
                    <img
                      src={require("../../assets/image/mail (3) 1.png")}
                      alt="cart"
                    />
                  </div>
                  <div className={`${style.cart}`}>
                    <Link to="/profile">
                      <img
                        src={require("../../assets/image/Mask Group (2).png")}
                        alt="cart"
                      />
                    </Link>
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

export default HeaderSeller;
