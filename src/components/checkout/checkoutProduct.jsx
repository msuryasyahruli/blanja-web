import React, { useEffect, useState } from "react";
import CheckoutPayment from "./checkoutPayment";
import axios from "axios";

const CheckoutProduct = () => {
  const customerId = localStorage.getItem("customerId");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/orders/${customerId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customerId]);

  return (
    <>
      <style>
        .address {"{"}
        height: auto; box-shadow: 0px 0px 10px #29292940, 0px 0px 25px #fff;
        border-radius: 10px; margin: 20px 0; font-weight: 500; padding: 25px;
        {"}"}
        .address button {"{"}
        border: 0; border-radius: 100px; width: 210px; height: 36px;
        {"}"}
        #select_product {"{"}
        border-radius: 10px; display: flex; align-items: center; margin: 20px
        0px; box-shadow: 0px 0px 10px #29292940, 0px 0px 25px #fff;
        {"}"}
      </style>
      <div className="row">
        <div className="col-lg-8">
          <section className="address">
            <h5>Andreas Jane</h5>
            <p style={{ fontWeight: 400, marginBottom: 20 }}>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
            </p>
            <div>
              <button>Choose another address</button>
            </div>
          </section>
          {data.map((data) => (
            <section className="row" id="select_product">
              <div className="col-sm-9 col-8" style={{ padding: "3%" }}>
                <div>
                  <img
                    src={data.product_photo}
                    alt="img"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />
                  <label style={{ lineHeight: "5px", padding: 10 }}>
                    <h6>{data.product_name}</h6>
                    <p style={{ fontSize: 12, color: "#9b9b9b" }}>
                      Zalora Cloth
                    </p>
                  </label>
                </div>
              </div>
              <div className="col-sm-3 col-4" style={{ padding: "3%" }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {new Intl.NumberFormat("Rp", {
                      style: "currency",
                      currency: "idr",
                    }).format(data.product_price)}{" "}
                </p>
              </div>
            </section>
          ))}
        </div>
        <div className="col-lg-4">
          <CheckoutPayment />
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
