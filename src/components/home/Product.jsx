import React, { useEffect } from "react";
import start from "../../assets/image/Rating 5 stars.png";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../config/redux/actions/getProductAction";

const ProductHome = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  return (
    <>
      <div className="row">
        {product.map((product, index) => (
          <div key={index} className="col-xl-2 col-md-3 col-6">
            <div
              class="mt-3 mb-3 rounded"
              style={{
                backgroundColor: "#fbfbfb",
                boxShadow: "0px 0px 10px #29292920, 0px 0px 25px #fff",
              }}
            >
              <Link to={`/detail/${product.id}`}>
                <div className="p-1" style={{ height: "170px" }}>
                  <img
                    class="h-100 rounded"
                    src={product.photo}
                    alt="Product"
                    crossOrigin="anonymous"
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="p-1">
                  <h6 className="card-title">{product.name}</h6>
                  <h6 className="text-danger">Rp {product.price}</h6>
                  <img src={start} />{" "}
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
