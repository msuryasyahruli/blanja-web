import React from "react";

const CheckoutPayment = () => {
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
        .payList {"{"}
        height: 50px; display: flex; justify-content: space-between;
        {"}"}
        .checkPayList {"{"}
        width: 50px; display: flex; justify-content: center;
        {"}"}
      </style>
      <section className="summary">
        <p style={{ fontWeight: 600, fontSize: 16 }}>Shopping summary</p>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#9b9b9b" }}>Order</p>
            <p
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "#222222",
              }}
            >
              Rp 240,000
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#9b9b9b" }}>Delivery</p>
            <p
              style={{
                fontWeight: 500,
                fontSize: 18,
                color: "#222222",
              }}
            >
              Rp 10,000
            </p>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: 500, fontSize: 16, color: "#222222" }}>
            Total price
          </p>
          <p style={{ fontWeight: 500, fontSize: 18, color: "#db3022" }}>
            Rp 250,000
          </p>
        </div>
        <button
          type="button"
          className="button_buy"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Select payment
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="header" style={{ padding: 15 }}>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  Payment
                </h5>
              </div>
              <div className="modal-body">
                <div>
                  <p>Payment method</p>
                  <div className="payList">
                    <div>
                      <img src={require("../../assets/image/gopay.png")} />
                    </div>
                    <div className="checkPayList">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="payList">
                    <div>
                      <img src={require("../../assets/image/POS.png")} />
                    </div>
                    <div className="checkPayList">
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className="payList">
                    <div>
                      <img src={require("../../assets/image/master card.png")} />
                    </div>
                    <div className="checkPayList">
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <section className="summary-pay" style={{ width: "100%" }}>
                  <p style={{ fontWeight: 600, fontSize: 16 }}>
                    Shopping summary
                  </p>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#9b9b9b" }}>Order</p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 18,
                          color: "#222222",
                        }}
                      >
                        Rp 240,000
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#9b9b9b" }}>Delivery</p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 18,
                          color: "#222222",
                        }}
                      >
                        Rp 10,000
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#222222",
                        }}
                      >
                        Total price
                        <br />
                        <span style={{ color: "#db3022" }}>Rp 250,000</span>
                      </p>
                    </div>
                    <a href="./checkout.html">
                      <button
                        style={{
                          width: 160,
                          height: 36,
                          border: 0,
                          backgroundColor: "#db3022",
                          color: "#fff",
                          borderRadius: 20,
                        }}
                      >
                        Buy
                      </button>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPayment;
