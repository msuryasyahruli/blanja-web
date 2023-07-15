import React, { useEffect } from "react";
import start from "../../assets/image/Rating 5 stars.png";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProductAction from "../../config/redux/actions/getProductAction";

const ProductHome = () => {
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.product)
  useEffect(() => {
    dispatch(getProductAction())
  }, []);
  return (
    <>
      <div className="row">
        {product.map((product, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="border rounded product">
              <Link to={`/detail/${product.id}`}>
                <img
                  src={product.photo}
                  alt="Product"
                  crossOrigin="anonymous"
                  style={{ width: "100%" }}
                />
                <div className="p-2">
                  <h5 className="card-title">{product.name}</h5>
                  <h5 className="text-danger">Rp {product.price}</h5>
                  <img src={start} />
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
