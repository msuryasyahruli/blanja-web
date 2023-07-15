import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  let { id } = useParams();
  let [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2525/products/${id}`)
      .then((res) => {
        setProducts(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <style>
        .amount {"{"}
        width: 36px; height: 36px; display: grid; justify-content: center;
        align-items: center; border-radius: 100%;
        {"}"}
      </style>
      <div className="row">
        <section className="col-lg-4">
          <div>
            <img
              src={product.photo}
              alt="Product"
              crossOrigin="anonymous"
              style={{ width: "100%" }}
            />
          </div>
        </section>
        <section className="col-lg-8">
          <p style={{ fontSize: 28, fontWeight: 600 }}>
          {product.name}
            <br />
            <span style={{ fontSize: 16, fontWeight: 500, color: "#9b9b9b" }}>
              Zalora Cloth
            </span>
            <br />
            <img src={require("../../assets/image/Rating 5 stars.png")} />
          </p>
          <p style={{ color: "#9b9b9b" }}>
            Price
            <br />
            <span style={{ fontSize: 33, fontWeight: 700, color: "black" }}>
              Rp {product.price}
            </span>
          </p>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>Color</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 180,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "100%",
                  margin: "5px 0",
                  backgroundColor: "#1a1a1a",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "100%",
                  margin: "5px 0",
                  backgroundColor: "#d84242",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "100%",
                  margin: "5px 0",
                  backgroundColor: "#4290d8",
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "100%",
                  margin: "5px 0",
                  backgroundColor: "#42d86c",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col" style={{ margin: "10px 0" }}>
              <p style={{ fontWeight: 600, fontSize: 16, margin: 0 }}>Size</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                }}
              >
                <div className="amount" style={{ backgroundColor: "#d4d4d4" }}>
                  <img src={require("../../assets/image/min.png")} />
                </div>
                <div className="amount">
                  <h6>26</h6>
                </div>
                <div
                  className="amount"
                  style={{ boxShadow: "0px 0px 10px #29292940" }}
                >
                  <img src={require("../../assets/image/plus.png")} />
                </div>
              </div>
            </div>
            <div className="col-sm-3 col" style={{ margin: "10px 0" }}>
              <p style={{ fontWeight: 600, fontSize: 16, margin: 0 }}>Jumlah</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
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
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-6" style={{ padding: 10 }}>
              <p
                style={{
                  height: 48,
                  width: "100%",
                  fontSize: 14,
                  fontWeight: 500,
                  margin: 0,
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#efefef",
                }}
              >
                Chat
              </p>
            </div>
            <div className="col-sm-3 col-6" style={{ padding: 10 }}>
              <p
                style={{
                  height: 48,
                  width: "auto",
                  fontSize: 14,
                  fontWeight: 500,
                  margin: 0,
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#efefef",
                }}
              >
                Add bag
              </p>
            </div>
            <div className="col-sm-6" style={{ padding: 10 }}>
              <p
                style={{
                  height: 48,
                  width: "auto",
                  fontSize: 14,
                  fontWeight: 500,
                  margin: 0,
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#db3022",
                  color: "#efefef",
                }}
              >
                Buy Now
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailProduct;
