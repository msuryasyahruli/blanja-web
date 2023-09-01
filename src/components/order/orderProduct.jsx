import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderProduct = () => {
  const customerId = localStorage.getItem("customerId");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/orders/${customerId}`)
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/orders/${customerId}`)
      .then((res) => {
        Swal.fire("Success", "Product Deleted", "success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <div className="col-lg-8">
        <section className="row" id="select_all_items">
          <div
            className="col-md-1 col-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" style={{ margin: 20 }} />
          </div>
          <div className="col-md-9 col-6">
            <label style={{ textAlign: "center", margin: "15px 0" }}>
              Select all items
              <span style={{ color: "#9b9b9b" }}> (3 items selected)</span>
            </label>
          </div>
          <div className="col-md-2 col-4">
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                style={{
                  textAlign: "center",
                  margin: "15px 0",
                  color: "#db3022",
                  border: 0,
                  backgroundColor: "transparent",
                }}
              >
                Delete
              </button>
            </form>
          </div>
        </section>
        {orders.map((orders, index) => (
          <section className="row" id="select_product" key={index}>
            <div className="col-md-7">
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
                  style={{ display: "flex", alignItems: "center", padding: 5 }}
                >
                  <img
                    src={orders.product_photo}
                    alt="img"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                  <label style={{ lineHeight: "normal", padding: 15 }}>
                    <h6>{orders.product_name}</h6>
                    <p style={{ fontSize: 12, color: "#9b9b9b" }}>
                      Zalora Cloth
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div
                  className="col-md-6 col-8"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="amount"
                    style={{ backgroundColor: "#d4d4d4" }}
                  >
                    <img
                      src={require("../../assets/image/min.png")}
                      alt="min"
                    />
                  </div>
                  <div className="amount">
                    <h6>1</h6>
                  </div>
                  <div
                    className="amount"
                    style={{ boxShadow: "0px 0px 10px #29292940" }}
                  >
                    <img
                      src={require("../../assets/image/plus.png")}
                      alt="plus"
                    />
                  </div>
                </div>
                <div
                  className="col-md-6 col-4"
                  style={{ textAlign: "center", paddingTop: 10 }}
                >
                  <p style={{ fontWeight: 700, fontSize: 16 }}>
                    {new Intl.NumberFormat("Rp", {
                      style: "currency",
                      currency: "idr",
                    }).format(orders.product_price)}{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default OrderProduct;
