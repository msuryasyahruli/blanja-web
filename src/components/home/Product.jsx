import React, { useEffect } from "react";
import stars from "../../assets/image/Rating 5 stars.png";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../config/redux/actions/ProcuctsActions/getProductAction";

const ProductHome = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="row">
        {product.map((product, index) => (
          <div key={index} className="col-xl-3 col-md-3 col-6">
            <div
              className="mt-3 mb-3 rounded"
              style={{
                backgroundColor: "#fbfbfb",
                boxShadow: "0px 0px 10px #29292920, 0px 0px 25px #fff",
              }}
            >
              <Link
                to={`/detail/${product.product_id}`}
                style={{ color: "black" }}
              >
                <div className="p-1" style={{ height: "170px" }}>
                  <img
                    className="h-100 rounded"
                    src={product.product_photo}
                    alt="Product"
                    crossOrigin="anonymous"
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="p-1">
                  <h6 className="card-title">{product.product_name}</h6>
                  <h6 className="text-danger">
                    {new Intl.NumberFormat("Rp", {
                      style: "currency",
                      currency: "idr",
                    }).format(product.product_price)}{" "}
                  </h6>
                  <img src={stars} alt="stars" />{" "}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductHome;
