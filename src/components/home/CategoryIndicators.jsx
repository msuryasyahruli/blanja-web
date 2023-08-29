import React from "react";
import shirt from "../../assets/image/t-shirt.png"
import short from "../../assets/image/short.png"
import jacket from "../../assets/image/jacket.png"
import pants from "../../assets/image/pants.png"
import shoes from "../../assets/image/shoes.png"
import heels from "../../assets/image/high heels.png"
import wristwatch from "../../assets/image/wristwatch.png"
import handbag from "../../assets/image/handbag.png"
import bagback from "../../assets/image/bagback.png"
import socks from "../../assets/image/socks.png"

const CategoryIndicators = () => {
  return (
    <>
      <div
        id="categoryIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <img
                  src={shirt}
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                  alt="shirt"
                />
              </div>
              <div>
                <img
                  src={short}
                  alt="short"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={jacket}
                  alt="jacket"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={pants}
                  alt="pants"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={shoes}
                  alt="shoes"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <img
                  src={heels}
                  alt="heels"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={wristwatch}
                  alt="wristwatch"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={handbag}
                  alt="handbag"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={bagback}
                  alt="bagback"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
              <div>
                <img
                  src={socks}
                  alt="socks"
                  className="d-block w-100"
                  style={{ padding: "5%" }}
                />
              </div>
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#categoryIndicators"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#categoryIndicators"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default CategoryIndicators;
