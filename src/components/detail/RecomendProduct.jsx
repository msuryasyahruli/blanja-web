import React from "react";
import ProductHome from "../home/Product";

const RecomendProduct = () => {
  return (
    <>
      <section>
        <div
          style={{
            margin: "20px 0",
            fontSize: 34,
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          <p>You can also like this</p>
          <p style={{ fontSize: 12, color: "#9b9b9b" }}>
            You’ve never seen it before!
          </p>
        </div>
        <ProductHome />
      </section>
    </>
  );
};

export default RecomendProduct;
