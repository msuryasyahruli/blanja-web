import React from "react";
import { useCategories } from "../../config/redux/hooks/categoryHook";

const Filter = () => {
  const { data } = useCategories();

  return (
    <>
      <div>
        <h6>Colors</h6>
        <div className="d-flex flex-wrap" style={{ gap: 16 }}>
          {["dark", "light", "danger", "info", "warning", "primary"].map(
            (item, i) => (
              <button
                key={i}
                className={`btn btn-${item} rounded-pill shadow`}
                style={{ width: 48, height: 48 }}
              />
            )
          )}
        </div>
      </div>
      <hr />
      <div>
        <h6>Sizes</h6>
        <div className="d-flex flex-wrap" style={{ gap: 16 }}>
          {["XS", "S", "M", "L", "XL"].map((item, i) => (
            <button
              key={i}
              className="btn btn-light border"
              style={{ width: 48, height: 48 }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h6>Category</h6>
        <div className="d-flex flex-wrap" style={{ gap: 16 }}>
          {data.map((item, i) => (
            <button
              key={i}
              className="btn btn-light border"
              style={{ height: 48 }}
            >
              {item.category_name}
            </button>
          ))}
        </div>
      </div>
      <hr />
      <footer className="row mx-n2">
        <div className="col-6 px-2">
          <button className="btn btn-light border rounded-pill w-100">
            Discard
          </button>
        </div>
        <div className="col-6 px-2">
          <button className="btn btn-danger rounded-pill w-100">Apply</button>
        </div>
      </footer>
    </>
  );
};

export default Filter;
