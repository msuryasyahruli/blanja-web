import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../components/navbar/Headers";
import CartProducts from "../components/cart/CartProducts";
import { useUser } from "../config/redux/hooks/userHook";
import { useCart } from "../config/redux/hooks/cartHook";
import { updateCart } from "../config/redux/actions/cartAction";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [refetchKey, setRefetchKey] = useState(Date.now());

  const navigate = useNavigate();
  const { id: userId } = useUser();
  const { data: cartData } = useCart(userId, refetchKey);

  const handleUpdate = (value, cartId) => {
    const data = {
      quantity: value,
    };
    updateCart(data, cartId).then(() => setRefetchKey(Date.now()));
  };

  const handleDelete = () => {};

  const totalPrice = cartData?.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  return (
    <>
      <Headers />
      <main className="container">
        <h2 className="my-3 font-weight-bold">My bag</h2>
        <div className="row mb-3">
          <section className="col-lg-8">
            <section className="d-flex shadow-sm rounded border mb-3">
              <div className="d-flex m-2 m-sm-3">
                <input
                  type="checkbox"
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              </div>
              <div className="d-flex justify-content-between w-100">
                <div>
                  <h6 className="my-3">
                    Select all items{" "}
                    <span className="text-black-50">({0} items selected)</span>
                  </h6>
                </div>
                <div className="d-inline-flex">
                  <button
                    className="btn btn-link text-danger"
                    disabled={cartData?.length === 0 || !isChecked}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </section>
            {cartData?.length === 0 ? (
              <section className="shadow-sm rounded mt-2 border">
                <h6 className="text-center my-5">No product added</h6>
              </section>
            ) : (
              cartData?.map((data, index) => (
                <CartProducts
                  key={index}
                  data={data}
                  onSetQuantity={(value) => handleUpdate(value, data.cart_id)}
                  onRefetchKey={() => setRefetchKey(Date.now())}
                />
              ))
            )}
          </section>
          <section className="col-lg-4 mt-3 mt-lg-0">
            <div className="shadow-sm rounded border p-2 p-sm-3">
              <h6 className="mb-3">Shopping summary</h6>
              {cartData?.length === 0 ? (
                <h6 className="text-center">No item</h6>
              ) : (
                cartData?.map((data, index) => (
                  <div key={index} className="d-flex justify-content-between">
                    <h6 className="text-black-50">
                      {data?.product_name} <small>{data?.quantity}x</small>
                    </h6>
                    <h6 className="font-weight-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "idr",
                      }).format(data?.product_price * data?.quantity)}
                    </h6>
                  </div>
                ))
              )}
              <hr className="border-dark" />
              <div className="d-flex justify-content-between mb-3">
                <h6 className="text-black-50">Total price</h6>
                <h6 className="font-weight-bold text-danger">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "idr",
                  }).format(totalPrice)}
                </h6>
              </div>
              <button
                className="btn btn-danger w-100 rounded-pill"
                disabled={cartData?.length === 0}
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Cart;
