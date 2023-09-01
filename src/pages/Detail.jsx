import React from "react";
import HeaderAfterLog from "../components/navbar/headerAfterLog";
import DetailProduct from "../components/detail/DetailProduct";
import Description from "../components/detail/Description";
import Review from "../components/detail/Review";
import RecomendProduct from "../components/detail/RecomendProduct";
import HeaderBeforeLog from "../components/navbar/headerBeforeLog";
import HeaderSeller from "../components/navbar/headerSeller";

const Detail = () => {
  const isLogin = localStorage.getItem('token');
  const role = localStorage.getItem("role");

  if (!isLogin) {
    return (
      <>
        <HeaderBeforeLog />
        <main>
          <div className="container">
            <DetailProduct/>
            <div>
              <p style={{ fontWeight: 600, fontSize: 28 }}>Informasi Produk</p>
              <section>
                <p style={{ fontWeight: 600, fontSize: 20, margin: 0 }}>
                  Condition
                </p>
                <p style={{ fontWeight: 500, fontSize: 20, color: "#db3022" }}>
                  New
                </p>
              </section>
              <Description/>
              <section>
                <p>Product review</p>
                <Review/>
              </section>
              <hr />
              <RecomendProduct/>
            </div>
          </div>
        </main>
      </>
    );
  }else{
    return (
      <>
        {role === "customer" ? <HeaderAfterLog /> : <HeaderSeller />}{" "}
        <main>
          <div className="container">
            <DetailProduct/>
            <div>
              <p style={{ fontWeight: 600, fontSize: 28 }}>Informasi Produk</p>
              <section>
                <p style={{ fontWeight: 600, fontSize: 20, margin: 0 }}>
                  Condition
                </p>
                <p style={{ fontWeight: 500, fontSize: 20, color: "#db3022" }}>
                  New
                </p>
              </section>
              <Description/>
              <section>
                <p>Product review</p>
                <Review/>
              </section>
              <hr />
              <RecomendProduct/>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Detail;
