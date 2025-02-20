import React, { useState } from "react";
import { postOrder } from "../../config/redux/actions/orderAction";

// assets
import GopayIcon from "../../assets/image/gopay.png";
import POSIcon from "../../assets/image/POS.png";
import MasterCardIcon from "../../assets/image/master card.png";

const PaymentMethod = ({ cartData, totalPrice, userId, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    order_status: "Pending",
    delivery_status: "Pending",
    total_price: totalPrice,
    payment_method: "",
    products: cartData,
    user_id: userId,
  });

  const handleSubmitBuy = async () => {
    setLoading(true);
    await postOrder(payload).finally(() => {
      setLoading(false);
      handleClose();
    });
  };

  return (
    <>
      <h6>Payment method</h6>
      <label className="row my-3">
        <div className="col-3">
          <img src={GopayIcon} alt="gopay" />
        </div>
        <div className="col-9 d-flex w-100">
          <h6>Gopay</h6>
          <input
            type="radio"
            name="paymentMethod"
            value="Gopay"
            className="ml-auto"
            onChange={(e) =>
              setPayload({ ...payload, payment_method: e.target.value })
            }
          />
        </div>
      </label>
      <label className="row my-3">
        <div className="col-3">
          <img src={POSIcon} alt="pos" />
        </div>
        <div className="col-9 d-flex w-100">
          <h6>POS Indonesia</h6>
          <input
            type="radio"
            name="paymentMethod"
            value="Pos Indonesia"
            className="ml-auto"
            onChange={(e) =>
              setPayload({ ...payload, payment_method: e.target.value })
            }
          />
        </div>
      </label>
      <label className="row my-3">
        <div className="col-3">
          <img src={MasterCardIcon} alt="master card" />
        </div>
        <div className="col-9 d-flex w-100">
          <h6>Master Card</h6>
          <input
            type="radio"
            name="paymentMethod"
            value="Mastercard"
            className="ml-auto"
            onChange={(e) =>
              setPayload({ ...payload, payment_method: e.target.value })
            }
          />
        </div>
      </label>
      <hr />
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
      <div className="d-flex justify-content-between">
        <h6 className="text-black-50">Order</h6>
        <h6 className="font-weight-bold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "idr",
          }).format(totalPrice)}
        </h6>
      </div>
      {/* <div className="d-flex justify-content-between">
        <h6 className="text-black-50">Delivery</h6>
        <h6 className="font-weight-bold">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "idr",
          }).format(0)}
        </h6>
      </div> */}
      <hr />
      <div className="d-flex justify-content-between align-items-end">
        <div className="w-50">
          <h6>Total price</h6>
          <h6 className="font-weight-bold text-danger">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "idr",
            }).format(totalPrice)}
          </h6>
        </div>
        <div className="w-50">
          <button
            className="btn btn-danger rounded-pill w-100"
            disabled={
              cartData?.length === 0 || !payload?.payment_method || loading
            }
            onClick={handleSubmitBuy}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Buy"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
