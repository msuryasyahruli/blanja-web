import React from "react";

// assets
import StarIcon from "../../assets/image/Star.png";

const Ratings = () => {
  const rating = [
    { star: 5, count: 16 },
    { star: 4, count: 5 },
    { star: 3, count: 2 },
    { star: 2, count: 0 },
    { star: 1, count: 1 },
  ];

  const totalCount = rating.reduce((sum, item) => sum + item.count, 0);
  const totalStars = rating.reduce(
    (sum, item) => sum + item.star * item.count,
    0
  );

  const calculatedRatings = rating.map((item) => ({
    ...item,
    percentage:
      totalCount > 0 ? Math.round((item.count / totalCount) * 100) : 0,
  }));

  const ratings = calculatedRatings;
  const averageRating =
    totalCount > 0 ? (totalStars / totalCount).toFixed(1) : 0;

  return (
    <>
      <div className="d-flex flex-wrap">
        <section className="mr-5 my-4">
          <div className="d-flex align-items-end font-weight-bold">
            <h1>{averageRating}</h1>
            <p className="text-muted">
              <span>/</span>5
            </p>
          </div>
          <div className="d-flex justify-content-between">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={StarIcon}
                alt="star"
                style={{ width: 22, height: 22 }}
              />
            ))}
          </div>
        </section>
        <section>
          {ratings.map((rating) => (
            <div className="d-flex align-items-center" key={rating.star}>
              <img src={StarIcon} alt="star" />
              <p className="m-0 mx-1">{rating.star}</p>
              <div
                className="progress mx-1 rounded-pill"
                style={{ width: 128, height: 8 }}
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: `${rating.percentage}%` }}
                  role="progressbar"
                ></div>
              </div>
              <p className="m-0 mx-1">{rating.count}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Ratings;
