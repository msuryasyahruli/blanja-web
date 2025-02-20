import React, { useState } from "react";
import Headers from "../components/navbar/Headers";
import SmModal from "../components/modal/SmModal";
import LgModal from "../components/modal/LgModal";
import PaymentMethod from "../components/checkout/PaymentMethod";
import AddressList from "../components/address/AddressList";
import { useAddress } from "../config/redux/hooks/addressHook";
import { useUser } from "../config/redux/hooks/userHook";
import { useCart } from "../config/redux/hooks/cartHook";

const Checkout = () => {
  const [paymentShow, setPaymentShow] = useState(false);
  const [addressShow, setAddressShow] = useState(false);

  const { data: userData, id: userId } = useUser();
  const { data: addressData } = useAddress(userId);
  const { data: cartData } = useCart(userId);

  const address = addressData.find((item) => item.is_default);

  const totalPrice = cartData?.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  return (
    <>
      <Headers />
      <main className="container">
        <h2 className="my-3 font-weight-bold">Checkout</h2>
        <h6>Shipping Address</h6>
        <div className="row">
          <section className="col-lg-8">
            <section className="shadow-sm rounded border mb-3 p-2 p-sm-3">
              {address ? (
                <>
                  <h5>{userData.username}</h5>
                  <p>
                    {`${address.address_name}, ${address.city}, ${address.postal_code}, ${address.address_type}`}
                  </p>
                </>
              ) : (
                <h5>Silakan atur alamat utama terlebih dahulu.</h5>
              )}
              <button
                className="btn rounded-pill border text-black-50"
                onClick={() => setAddressShow(true)}
              >
                Choose another address
              </button>
            </section>
            {cartData?.length === 0 ? (
              <section className="shadow-sm rounded mt-2 border">
                <h6 className="text-center my-5">No product added</h6>
              </section>
            ) : (
              cartData.map((data, index) => (
                <section
                  key={index}
                  className="d-flex shadow-sm rounded mt-2 border p-2 p-sm-3"
                >
                  <img
                    src={data?.product_thumbnail}
                    alt="thumbnail"
                    className="rounded mr-2 bg-danger"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                    }}
                  />
                  <div className="d-flex flex-wrap w-100">
                    <div className="mr-auto">
                      <h6>
                        {data?.product_name} <small>{data?.quantity}x</small>
                      </h6>
                      <small className="text-muted">{data?.store_name}</small>
                      <p className="text-muted m-0">
                        Variant: {data?.picked_variant}
                      </p>
                    </div>
                    <div className="text-center my-auto">
                      <h6 className="font-weight-bold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "idr",
                        }).format(data?.product_price)}
                      </h6>
                    </div>
                  </div>
                </section>
              ))
            )}
          </section>
          <section className="col-lg-4 my-3 m-lg-0">
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
                <p className="text-black-50">Delivery</p>
                <h6 className="font-weight-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "idr",
                  }).format(12000)}
                </h6>
              </div> */}
              <hr className="border-dark" />
              <div className="d-flex justify-content-between my-2">
                <h6>Total price</h6>
                <h6 className="font-weight-bold text-danger">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "idr",
                  }).format(totalPrice)}
                </h6>
              </div>
              <button
                className="btn btn-danger rounded-pill w-100"
                onClick={() => setPaymentShow(true)}
                disabled={cartData?.length === 0 || !address}
              >
                Select payment
              </button>
            </div>
          </section>
        </div>
      </main>

      <SmModal
        title="Payment"
        onShow={paymentShow}
        handleClose={() => setPaymentShow(false)}
      >
        <PaymentMethod
          cartData={cartData}
          totalPrice={totalPrice}
          userId={userId}
          handleClose={() => setPaymentShow(false)}
        />
      </SmModal>
      <LgModal
        title="Choose another address"
        onShow={addressShow}
        handleClose={() => setAddressShow(false)}
      >
        <AddressList />
      </LgModal>
    </>
  );
};

export default Checkout;
