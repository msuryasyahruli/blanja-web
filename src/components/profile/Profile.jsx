import React from "react";

const ProfileName = () => {
  return (
    <>
      <style>
        .nav-pills .nav-link.active, .nav-pills .show &gt; .nav-link {"{"}
        color: #fff; background-color: #bab7b7;
        {"}"}
        .nav-pills .nav-link {"{"}
        background-color: #efefef; color: #9b9b9b;
        {"}"}
      </style>
      <div className="col-lg-3 col-md-4 pt-5">
        <section
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assets/image/profile.png")}
            alt="profile"
            style={{ height: 60 }}
          />
          <div className="m-2 text-center" style={{ height: 50 }}>
            <h6 className="p-0">Johanes Mikael</h6>
            <p style={{ color: "#9b9b9b" }}>Ubah profile</p>
          </div>
        </section>
        <section className="mt-3 mb-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              style={{
                display: "flex",
                margin: "5px 0",
                padding: 10,
                borderRadius: 10,
                border: 0,
              }}
              className="nav-link active"
              id="v-pills-Store-tab"
              data-toggle="pill"
              data-target="#v-pills-Store"
              type="button"
              role="tab"
              aria-controls="v-pills-Store"
              aria-selected="true"
            >
              <div
                className="mr-3"
                style={{
                  backgroundColor: "#456bf3",
                  borderRadius: "100%",
                  width: 32,
                  height: 32,
                  display: "flexbox",
                }}
              >
                <img src={require("../../assets/image/home (2) 1.png")} alt="Home" />
              </div>
              <p style={{ margin: 3, fontWeight: 500, fontSize: 14 }}>Store</p>
            </button>
            <button
              style={{
                display: "flex",
                margin: "5px 0",
                padding: 10,
                borderRadius: 10,
                border: 0,
              }}
              className="nav-link"
              id="v-pills-Product-tab"
              data-toggle="pill"
              data-target="#v-pills-Product"
              type="button"
              role="tab"
              aria-controls="v-pills-Product"
              aria-selected="false"
            >
              <div
                className="mr-3"
                style={{
                  backgroundColor: "#f36f45",
                  borderRadius: "100%",
                  width: 32,
                  height: 32,
                  display: "flexbox",
                }}
              >
                <img src={require("../../assets/image/package 1.png")} alt="Product" />
              </div>
              <p style={{ margin: 3, fontWeight: 500, fontSize: 14 }}>
                Product
              </p>
            </button>
            <button
              style={{
                display: "flex",
                margin: "5px 0",
                padding: 10,
                borderRadius: 10,
                border: 0,
              }}
              className="nav-link"
              id="v-pills-Order-tab"
              data-toggle="pill"
              data-target="#v-pills-Order"
              type="button"
              role="tab"
              aria-controls="v-pills-Order"
              aria-selected="false"
            >
              <div
                className="mr-3"
                style={{
                  backgroundColor: "#f3456f",
                  borderRadius: "100%",
                  width: 32,
                  height: 32,
                  display: "flexbox",
                }}
              >
                <img src={require("../../assets/image/shopping-cart (3) 1.png")} alt="selling" />
              </div>
              <p style={{ margin: 3, fontWeight: 500, fontSize: 14 }}>
                Selling products
              </p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfileName;
