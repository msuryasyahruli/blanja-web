import React from "react";
import trend2020 from "../../assets/image/trend 2020.png";
import blackedition from "../../assets/image/black edition.png";

const PromotionIndicators = () => {
  return (
    <>
      <div
        id="promotionIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#promotionIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#promotionIndicators" data-slide-to={1} />
          <li data-target="#promotionIndicators" data-slide-to={2} />
          <li data-target="#promotionIndicators" data-slide-to={3} />
        </ol>
        <div
          className="carousel-inner"
          style={{ borderRadius: 10, lineHeight: 100 }}
        >
          <div className="carousel-item active">
            <img src={trend2020} className="d-block w-100" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ fontSize: 100, fontWeight: 300 }}
            >
              <p>Trend In 2020</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={blackedition} className="d-block w-100" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ fontSize: 100, fontWeight: 300 }}
            >
              <p>Black Edition</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={trend2020} className="d-block w-100" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ fontSize: 100, fontWeight: 300 }}
            >
              <p>Trend In 2020</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={blackedition} className="d-block w-100" />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ fontSize: 100, fontWeight: 300 }}
            >
              <p>Black Edition</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#promotionIndicators"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#promotionIndicators"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default PromotionIndicators;
