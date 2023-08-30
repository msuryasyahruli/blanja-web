import React, { useEffect, useState } from "react";
import ListProduct from "./listProduct";
import SellingProduct from "./SellingProduct";
import axios from "axios";

const MyProfile = () => {
  const sellerId = localStorage.getItem("sellerId");
  const [seller, setSeller] = useState({
    store_name: "",
    seller_email: "",
    seller_phone: "",
    store_description: "",
  });

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_KEY}/seller/${sellerId}`, seller)
      .then((res) => {
        setSeller(res);
        alert("Profile updated");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/seller/detail/${sellerId}`)
      .then((res) => {
        setSeller(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sellerId]);

  return (
    <>
      <style>
        .profileIn input {"{"}
        width: 100%; height: 48px; border-radius: 5px; margin-bottom: 10px;
        {"}"}
      </style>
      <div
        className="col-lg-9 col-md-8"
        style={{ backgroundColor: "#f5f5f5", height: "auto" }}
      >
        <div className="tab-content" id="v-pills-tabContent">
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
                    <h4>My profile store</h4>
                    <p>Manage your profile information</p>
                  </div>
                  <hr />
                </div>
                <div className="row">
                  <section
                    className="m-3 col-xl-3 row d-flex justify-content-center pt-3"
                  >
                    <div>
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
                    </div>
                  </section>
                  <section className="m-3 col-xl-8">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                          <h6>Store name</h6>
                        </div>
                        <div className="col-md-8 profileIn">
                          <input
                            type="text"
                            placeholder="Store name"
                            name="store_name"
                            value={seller.store_name}
                            onChange={handleChange}
                            style={{ border: "1px solid black", padding: 10 }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                          <h6>Email</h6>
                        </div>
                        <div className="col-md-8 profileIn">
                          <input
                            type="text"
                            placeholder="example@gmail.com"
                            name="seller_email"
                            value={seller.seller_email}
                            onChange={handleChange}
                            style={{ border: "1px solid black", padding: 10 }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                          <h6>Phone number</h6>
                        </div>
                        <div className="col-md-8 profileIn">
                          <input
                            type="text"
                            placeholder="08xxxxxxxxxx"
                            name="seller_phone"
                            value={seller.seller_phone}
                            onChange={handleChange}
                            style={{ border: "1px solid black", padding: 10 }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                          <h6>Store description</h6>
                        </div>
                        <div className="col-md-8 profileIn">
                          <textarea
                            type="text"
                            placeholder="Store description"
                            name="store_description"
                            value={seller.store_description}
                            onChange={handleChange}
                            style={{
                              border: "1px solid black",
                              padding: 10,
                              width: "100%",
                              borderRadius: 5,
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end pt-2">
                        <button
                          type="submit"
                          style={{ width: 100, height: 40, borderRadius: 100 }}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </section>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Product"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
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
                  <h4>My product</h4>
                </div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-items-tab"
                      data-toggle="tab"
                      data-target="#nav-items"
                      type="button"
                      role="tab"
                      aria-controls="nav-items"
                      aria-selected="true"
                    >
                      Items
                    </button>
                    <button
                      className="nav-link"
                      id="nav-Sold-tab"
                      data-toggle="tab"
                      data-target="#nav-Sold"
                      type="button"
                      role="tab"
                      aria-controls="nav-Sold"
                      aria-selected="false"
                    >
                      Sold Items
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-items"
                    role="tabpanel"
                    aria-labelledby="nav-items-tab"
                  >
                    <ListProduct />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Sold"
                    role="tabpanel"
                    aria-labelledby="nav-Sold-tab"
                  >
                    <input
                      type="text"
                      style={{
                        width: 230,
                        height: "19.8px",
                        margin: 15,
                        padding: 20,
                        border: 0,
                        backgroundColor: "#efefef",
                        borderRadius: 50,
                      }}
                      placeholder="Search"
                    />
                    <div
                      style={{
                        border: "1px solid",
                        height: 412,
                        margin: 15,
                      }}
                    />
                  </div>
                </div>
                <hr />
              </section>
            </div>
          </div>
          <SellingProduct />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
