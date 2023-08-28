import React from "react";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const navigate = useNavigate();

  const isLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <style>
        .profileIn input {"{"}
        width: 100%; height: 48px; border-radius: 5px; margin-bottom: 10px;
        {"}"}
      </style>
      <div
        className="tab-pane fade show active"
        id="v-pills-Store"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
        style={{ padding: "50px 0" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 5,
          }}
        >
          <section>
            <div className="p-3">
              <div>
                <h4>My profile</h4>
                <p>Manage your profile information</p>
              </div>
              <hr />
            </div>
            <div className="row">
              <section
                className="m-3 col-xl-3 row align-items-center"
                style={{ display: "grid" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={require("../../assets/image/fotoprofile110.png")}
                    alt="profile"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <button
                    style={{
                      width: 140,
                      height: 36,
                      borderRadius: 50,
                      border: 0,
                    }}
                  >
                    Select image
                  </button>
                </div>
              </section>
              <section className="m-3 col-xl-8">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Name</h6>
                  </div>
                  <div className="col-md-8 profileIn">
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h6>Email</h6>
                  </div>
                  <div className="col-md-8 profileIn">
                    <input type="text" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h6>Phone number</h6>
                  </div>
                  <div className="col-md-8 profileIn">
                    <input type="text" placeholder="08xxxxxxxxxx" />
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div
            className="p-4"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button
              style={{
                width: 140,
                height: 36,
                border: 0,
                borderRadius: "50px",
                backgroundColor: "#db3022",
                color: "#efefef",
              }}
              onClick={isLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
