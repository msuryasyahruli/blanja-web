import React from "react";
import HeaderAfterLog from "../components/navbar/headerAfterLog";
import CheckoutProduct from "../components/checkout/checkoutProduct";

const Checkout = () => {
  return (
    <>
      <HeaderAfterLog/>
      <main>
        <div className="container">
          <h1 style={{ fontWeight: 700, margin: "50px 0px 30px 0px" }}>
            Checkout
          </h1>
          <p style={{ fontWeight: 600, fontSize: 16 }}>Shipping Address</p>
          <CheckoutProduct/>
        </div>
      </main>
    </>
  );
};

export default Checkout;
