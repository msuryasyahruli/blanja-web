import React from "react";
import OrderProduct from "../components/order/orderProduct";
import OrderPayment from "../components/order/orderPayment";
import HeaderAfterLog from "../components/navbar/headerAfterLog";

const Order = () => {
  return (
    <>
    <HeaderAfterLog/>
      <main>
        <div className="container">
          <h1 style={{ fontWeight: 700, margin: "50px 0px 30px 0px" }}>
            My bag
          </h1>
          <div className="row">
            <OrderProduct/>
            <OrderPayment/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Order;
