import React, { useState } from "react";

// assets
import PlusIcon from "../../assets/image/plus.png";
import MinIcon from "../../assets/image/min.png";
import { deleteCart } from "../../config/redux/actions/cartAction";

const CartProducts = ({ data, onSetQuantity, onRefetchKey }) => {
  const [quantity, setQuantity] = useState(data?.quantity);

  const handleSetQuantity = (quantity) => {
    setQuantity(quantity);
    onSetQuantity(quantity);
  };

  const handleDelete = async (id) => {
    await deleteCart(id);
    onRefetchKey();
  };

  return (
    <>
      <section className="d-flex shadow-sm rounded mt-2 border py-2">
        <div className="d-flex m-2 m-sm-3">
          <input type="checkbox" />
        </div>
        <div className="row mx-n2 w-100">
          <div className="d-flex col-sm-6 px-2">
            <div className="d-flex p-1">
              <img
                src={data?.product_thumbnail}
                alt="thumbnail"
                className="rounded"
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                }}
              />
              <div className="ml-2">
                <h6>{data?.product_name}</h6>
                <small className="text-danger">{data?.store_name}</small>
                <p className="text-muted m-0">
                  Variant: {data?.picked_variant}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex col-sm-6 p-2">
            <div className="d-flex justify-content-center align-items-center px-2">
              <button
                className="btn btn-info border-0 rounded-circle"
                onClick={() => handleSetQuantity(Math.max(quantity - 1, 1))}
                disabled={quantity <= 1}
              >
                <img src={MinIcon} alt="min" />
              </button>
              <h6 className="m-2">{quantity}</h6>
              <button
                className="btn btn-light border-0 rounded-circle shadow"
                onClick={() => handleSetQuantity(Math.min(quantity + 1, 10))}
                disabled={quantity >= 5}
              >
                <img src={PlusIcon} alt="plus" />
              </button>
            </div>
            <div className="w-100 text-right m-auto">
              <h6 className="font-weight-bold mx-3">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "idr",
                }).format(data?.product_price * quantity)}
              </h6>
              <button
                className="btn btn-link text-danger"
                onClick={() => handleDelete(data?.cart_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartProducts;
