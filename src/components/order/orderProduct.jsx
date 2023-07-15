import React from "react";

const OrderProduct = () => {
  return (
    <>
      <style>
        #select_all_items {"{"}
        box-shadow: 0px 0px 10px #29292940, 0px 0px 25px #fff; border-radius:
        10px; margin: 20px 0; font-weight: 500;
        {"}"}
        .amount {"{"}
        width: 36px; height: 36px; display: grid; justify-content: center;
        align-items: center; border-radius: 100%;
        {"}"}
        #select_product {"{"}
        border-radius: 10px; display: flex; align-items: center; margin: 20px
        0px; box-shadow: 0px 0px 10px #29292940, 0px 0px 25px #fff;
        {"}"}
      </style>
      <div className="col-md-8">
        <section className="row" id="select_all_items">
          <div
            className="col-lg-1 col-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" style={{ margin: 20 }} />
          </div>
          <div className="col-lg-9 col-6">
            <label style={{ textAlign: "center", margin: "15px 0" }}>
              Select all items
              <span style={{ color: "#9b9b9b" }}>(3 items selected)</span>
            </label>
          </div>
          <div className="col-lg-2 col-4">
            <p
              style={{
                textAlign: "center",
                margin: "15px 0",
                color: "#db3022",
              }}
            >
              Delete
            </p>
          </div>
        </section>
        <section className="row" id="select_product">
          <div className="col-lg-7">
            <div className="row">
              <div
                className="col-md-2 col-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" />
              </div>
              <div
                className="col-md-10 col-10"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "normal", padding: 15 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div
                className="col-8"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="amount" style={{ backgroundColor: "#d4d4d4" }}>
                  <img src={require("../../assets/image/min.png")} />
                </div>
                <div className="amount">
                  <h6>1</h6>
                </div>
                <div
                  className="amount"
                  style={{ boxShadow: "0px 0px 10px #29292940" }}
                >
                  <img src={require("../../assets/image/plus.png")} />
                </div>
              </div>
              <div
                className="col-4"
                style={{ textAlign: "center", paddingTop: 10 }}
              >
                <p style={{ fontWeight: 700, fontSize: 16 }}>Rp 80,000</p>
              </div>
            </div>
          </div>
        </section>
        <section className="row" id="select_product">
          <div className="col-lg-7">
            <div className="row">
              <div
                className="col-md-2 col-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" />
              </div>
              <div
                className="col-md-10 col-10"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "normal", padding: 15 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div
                className="col-8"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="amount" style={{ backgroundColor: "#d4d4d4" }}>
                  <img src={require("../../assets/image/min.png")} />
                </div>
                <div className="amount">
                  <h6>1</h6>
                </div>
                <div
                  className="amount"
                  style={{ boxShadow: "0px 0px 10px #29292940" }}
                >
                  <img src={require("../../assets/image/plus.png")} />
                </div>
              </div>
              <div
                className="col-4"
                style={{ textAlign: "center", paddingTop: 10 }}
              >
                <p style={{ fontWeight: 700, fontSize: 16 }}>Rp 80,000</p>
              </div>
            </div>
          </div>
        </section>
        <section className="row" id="select_product">
          <div className="col-lg-7">
            <div className="row">
              <div
                className="col-md-2 col-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" />
              </div>
              <div
                className="col-md-10 col-10"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "normal", padding: 15 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div
                className="col-8"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="amount" style={{ backgroundColor: "#d4d4d4" }}>
                  <img src={require("../../assets/image/min.png")} />
                </div>
                <div className="amount">
                  <h6>1</h6>
                </div>
                <div
                  className="amount"
                  style={{ boxShadow: "0px 0px 10px #29292940" }}
                >
                  <img src={require("../../assets/image/plus.png")} />
                </div>
              </div>
              <div
                className="col-4"
                style={{ textAlign: "center", paddingTop: 10 }}
              >
                <p style={{ fontWeight: 700, fontSize: 16 }}>Rp 80,000</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderProduct;
