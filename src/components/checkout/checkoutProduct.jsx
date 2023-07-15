import React from "react";
import CheckoutPayment from "./checkoutPayment";

const CheckoutProduct = () => {
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
          <section className="row" id="select_product">
            <div className="col-sm-10 col-10" style={{ padding: "3%" }}>
              <div>
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "5px", padding: 10 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
            <div className="col-sm-2 col-2" style={{ padding: "3%" }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Rp 80,000
              </p>
            </div>
          </section>
          <section className="row" id="select_product">
            <div className="col-sm-10 col-10" style={{ padding: "3%" }}>
              <div>
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "5px", padding: 10 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
            <div className="col-sm- col-2" style={{ padding: "3%" }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Rp 80,000
              </p>
            </div>
          </section>
          <section className="row" id="select_product">
            <div className="col-sm-10 col-10" style={{ padding: "3%" }}>
              <div>
                <img src={require("../../assets/image/Mask Group (3).png")} />
                <label style={{ lineHeight: "5px", padding: 10 }}>
                  <h6>Men's formal suit - Black</h6>
                  <p style={{ fontSize: 12, color: "#9b9b9b" }}>Zalora Cloth</p>
                </label>
              </div>
            </div>
            <div className="col-sm-2 col-2" style={{ padding: "3%" }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Rp 80,000
              </p>
            </div>
          </section>
        </div>
        <div className="col-lg-4">
          <CheckoutPayment />
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
