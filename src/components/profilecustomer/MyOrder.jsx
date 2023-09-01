import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
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

  return (
    <>
      <div
        className="tab-pane fade"
        id="v-pills-Order"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
        style={{ padding: "50px 0" }}
      >
        <form>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>My order</h4>
                <hr />
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#home"
                    >
                      All items
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu1">
                      Not yet paid
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu2">
                      Packed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu3">
                      Sent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu4">
                      Completed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu5">
                      Order cancel
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane container active" id="home">
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
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: 5,
                              }}
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
                              <label
                                style={{ lineHeight: "normal", padding: 10 }}
                              >
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
                  <div className="tab-pane container fade" id="menu1">
                    Not yet paid
                  </div>
                  <div className="tab-pane container fade" id="menu2">
                    Packed
                  </div>
                  <div className="tab-pane container fade" id="menu3">
                    Sent
                  </div>
                  <div className="tab-pane container fade" id="menu4">
                    Completed
                  </div>
                  <div className="tab-pane container fade" id="menu5">
                    Order cancel
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyOrder;
