import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SmModal from "../modal/SmModal";
import Filter from "./Filter";
import { useUser } from "../../config/redux/hooks/userHook";

// assets
import BlanjaLogo from "../../assets/image/Group 1159.png";
import SearchIcon from "../../assets/image/Search Glyph.png";
import FilterIcon from "../../assets/image/filter 1.png";
import CartIcon from "../../assets/image/shopping-cart (2) 1.png";
import BellIcon from "../../assets/image/bell (1) 1.png";
import MailIcon from "../../assets/image/mail (3) 1.png";
import ProfileIcon from "../../assets/image/fotoprofile.png";

const Headers = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  const { data: userData } = useUser();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <>
      <header className="shadow sticky-top bg-light">
        <div className="container p-0">
          <nav className="navbar navbar-expand-md navbar-light">
            <section className="d-flex">
              <div className="mr-md-3">
                <img src={BlanjaLogo} alt="logo" />
              </div>
            </section>

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

            <section
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="mt-2 mt-md-0 d-md-flex justify-content-between w-100">
                <section
                  className="d-flex mr-0 mr-md-2 w-100 mx-auto mx-md-0"
                  style={{ maxWidth: 450 }}
                >
                  <div className="input-group mr-2 rounded-pill border">
                    <input
                      type="text"
                      className="form-control border-0 rounded-pill my-auto bg-light pr-1"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light rounded-pill"
                        type="button"
                        id="button-addon2"
                      >
                        <img src={SearchIcon} alt="search" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-muted border btn btn-light"
                    onClick={() => setShow(true)}
                  >
                    <img
                      src={FilterIcon}
                      alt="filter"
                      style={{ width: 24, height: 24 }}
                    />
                  </button>
                </section>

                {!token ? (
                  <section
                    className="d-flex mt-2 mt-md-0"
                    style={{ gap: 16, minWidth: 240 }}
                  >
                    <button
                      className="btn rounded-pill btn-danger text-white w-50"
                      onClick={() => navigate("/login")}
                    >
                      Sign In
                    </button>
                    <button
                      className="btn btn-light rounded-pill text-muted border w-50"
                      onClick={() => navigate("/register")}
                    >
                      Sign Up
                    </button>
                  </section>
                ) : (
                  <section className="d-flex mt-2 mt-md-0 justify-content-center align-items-center">
                    <button
                      className="btn btn-light rounded-pill"
                      onClick={() => navigate("/cart")}
                    >
                      <img src={CartIcon} alt="order" />
                    </button>
                    <button className="btn btn-light rounded-pill">
                      <img src={BellIcon} alt="bell" />
                    </button>
                    <button className="btn btn-light rounded-pill">
                      <img src={MailIcon} alt="mail" />
                    </button>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle p-0 ml-2"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={userData.user_photo || ProfileIcon}
                          alt="profile"
                          className="rounded-circle"
                          style={{ width: 32, height: 32, objectFit: "cover" }}
                        />
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <button
                          className="dropdown-item"
                          onClick={() => navigate("/profile")}
                        >
                          Profile
                        </button>
                        <button
                          className="dropdown-item disabled"
                          onClick={() => navigate("/")}
                        >
                          Wishlist
                        </button>
                        <button
                          className="dropdown-item disabled"
                          onClick={() => navigate("/")}
                        >
                          Setting
                        </button>
                        <div className="dropdown-divider" />
                        <button
                          className="dropdown-item btn-danger"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </section>
          </nav>
        </div>
      </header>

      <SmModal title="Filter" onShow={show} handleClose={() => setShow(false)}>
        <Filter />
      </SmModal>
    </>
  );
};

export default Headers;
