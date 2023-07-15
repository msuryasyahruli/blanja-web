import React from "react";

const Review = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-5">
          <p style={{ fontWeight: 500, fontSize: 60 }}>
            5<span style={{ fontSize: 20, color: "#9b9b9b" }}>/5</span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <div style={{ width: "22.29px" }}>
              <img
                src={require("../../assets/image/Star.png")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "22.29px" }}>
              <img
                src={require("../../assets/image/Star.png")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "22.29px" }}>
              <img
                src={require("../../assets/image/Star.png")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "22.29px" }}>
              <img
                src={require("../../assets/image/Star.png")}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "22.29px" }}>
              <img
                src={require("../../assets/image/Star.png")}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-6" style={{ padding: 0 }}>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img src={require("../../assets/image/Star.png")} />
            </div>
            <div>
              <p style={{ height: 5 }}>5</p>
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                backgroundColor: "#9a9a9a",
                borderRadius: 5,
              }}
            />
            <p style={{ height: 5 }}>4</p>
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img src={require("../../assets/image/Star.png")} />
            </div>
            <div>
              <p style={{ height: 5 }}>4</p>
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                backgroundColor: "transparent",
                borderRadius: 5,
              }}
            />
            <p style={{ height: 5 }}>0</p>
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img src={require("../../assets/image/Star.png")} />
            </div>
            <div>
              <p style={{ height: 5 }}>3</p>
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                backgroundColor: "transparent",
                borderRadius: 5,
              }}
            />
            <p style={{ height: 5 }}>0</p>
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img src={require("../../assets/image/Star.png")} />
            </div>
            <div>
              <p style={{ height: 5 }}>2</p>
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                backgroundColor: "transparent",
                borderRadius: 5,
              }}
            />
            <p style={{ height: 5 }}>0</p>
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img src={require("../../assets/image/Star.png")} />
            </div>
            <div>
              <p style={{ height: 5 }}>1</p>
            </div>
            <div
              style={{
                width: 120,
                height: 8,
                backgroundColor: "transparent",
                borderRadius: 5,
              }}
            />
            <p style={{ height: 5 }}>0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
