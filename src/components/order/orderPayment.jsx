import React from "react";
import { Link } from "react-router-dom";

const OrderPayment = () => {
  return (
    <>
      <style>
        .summary {"{"}
        border-radius: 10px; box-shadow: 0px 0px 10px #29292940, 0px 0px 25px
        #fff; padding: 20px; margin: 20px 0;
        {"}"}
        .button_buy {"{"}
        width: 100%; height: 36px; border: 0; background-color: #db3022; color:
        #fff; border-radius: 20px; left: auto; right: auto;
        {"}"}
        .button_buy:hover {"{"}
        background-color: #cd2617;
        {"}"}
      </style>
      <div className="col-md-4">
        <section className="summary">
          <div>
            <p style={{ fontWeight: 600, fontSize: 16 }}>Shopping summary</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#9b9b9b",
                }}
              >
                Total price
              </p>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#222222",
                }}
              >
                Rp 240,000
              </p>
            </div>
            <div>
              <a href="./checkout.html">
                <Link to="/checkout"><button className="button_buy">Buy</button></Link>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderPayment;
