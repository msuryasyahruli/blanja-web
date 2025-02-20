import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Ratings from "../components/detail/Ratings";
import Headers from "../components/navbar/Headers";
import { useUser } from "../config/redux/hooks/userHook";
import { useDetailProduct } from "../config/redux/hooks/productHook";

// assets
import PlusIcon from "../assets/image/plus.png";
import MinIcon from "../assets/image/min.png";
import StarIcon from "../assets/image/Rating 5 stars.png";
import { postCart } from "../config/redux/actions/cartAction";
import { getToken } from "../config/storage";

const Detail = () => {
  const token = getToken();
  const navigate = useNavigate();
  const { id } = useParams();
  const { id: userId } = useUser();
  const { data: detailProduct, isLoading } = useDetailProduct(id);

  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    product_id: id,
    user_id: userId,
    quantity: 1,
    picked_variant: ""
  });
console.log(payload)
  const handleAddBag = async () => {
    setLoading(true);
    await postCart(payload).finally(() => setLoading(false));
  };

  const variantColors =
    detailProduct?.product_variants &&
    detailProduct?.product_variants.split(", ").map((color) => color.trim());

  return (
    <>
      <Headers />
      {isLoading ? (
        <div className="text-center mt-5" role="status">
          <span className="spinner-border"></span>
        </div>
      ) : (
        <main className="container">
          <div className="row mt-sm-4">
            <section className="col-md-5 col-lg-4 p-0 px-sm-3 pr-md-0">
              <img
                src={detailProduct?.product_thumbnail}
                alt="product"
                crossOrigin="anonymous"
                className="w-100"
              />
            </section>
            <section className="col-md-7 col-lg-8">
              <h2>{detailProduct?.product_name}</h2>
              <p className="text-black-50 m-0">
                {detailProduct?.store_name}
              </p>{" "}
              <img src={StarIcon} alt="stars" />
              <p className="text-black-50 m-0 mt-3">Price</p>
              <h3 className="font-weight-bold">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "idr",
                }).format(detailProduct?.product_price)}
              </h3>
              <div className="mt-3">
                <h6>Color</h6>
                <div className="d-flex">
                  {variantColors?.map((item, i) => (
                    <label className="mr-2" key={i}>
                      <input
                        type="radio"
                        name="product_variant"
                        value={item}
                        className="d-none"
                        onChange={(e) =>
                          setPayload({ ...payload, picked_variant: e.target.value })
                        }
                      />
                      <span
                        className={`rounded-circle shadow-sm d-inline-block ${
                          payload.color === item && "border shadow"
                        }`}
                        style={{
                          width: 36,
                          height: 36,
                          backgroundColor: item,
                          cursor: "pointer",
                        }}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className="d-flex">
                <section className="my-2 mr-4">
                  <h6>Quantity</h6>
                  <div className="d-flex">
                    <button
                      className="btn btn-info rounded-circle border"
                      onClick={() =>
                        setPayload((prev) => ({
                          ...payload,
                          quantity: prev.quantity - 1,
                        }))
                      }
                      disabled={payload.quantity <= 1}
                    >
                      <img src={MinIcon} alt="min" />
                    </button>
                    <h6 className="m-2">{payload.quantity}</h6>
                    <button
                      className="btn btn-light shadow-sm rounded-circle border"
                      onClick={() =>
                        setPayload((prev) => ({
                          ...payload,
                          quantity: prev.quantity + 1,
                        }))
                      }
                      disabled={
                        payload.quantity >= detailProduct?.product_stock
                      }
                    >
                      <img src={PlusIcon} alt="plus" />
                    </button>
                  </div>
                </section>
                <section className="my-2">
                  <h6>Stock</h6>
                  <p className="badge badge-success">
                    {detailProduct?.product_stock}
                  </p>
                </section>
              </div>
              {token ? (
                <div className="row mx-n2">
                  <div className="col-6 p-2">
                    <button
                      className="btn btn-light border-dark rounded-pill w-100"
                      disabled={loading}
                      onClick={handleAddBag}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        "Add bag"
                      )}
                    </button>
                  </div>
                  <div className="col-6 p-2">
                    <button
                      className="btn btn-danger rounded-pill w-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        "Buy now"
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="btn btn-light border rounded-pill w-100 my-2"
                  onClick={() => navigate("/login")}
                >
                  Login to buy
                </button>
              )}
            </section>
          </div>
          <div className="my-4">
            <h4 className="mb-4">Product information</h4>
            <div>
              <h5>Condition</h5>
              <h5 className="text-danger">New</h5>
            </div>
            <div>
              <h5>Description</h5>
              <p className="text-black-50">
                {detailProduct?.product_description}
              </p>
            </div>
            <h4>Product review</h4>
            <Ratings />
          </div>
          <hr />
          <div>
            <h2>You can also like this</h2>
            <small className="m-0 text-black-50">
              You’ve never seen it before!
            </small>
          </div>
        </main>
      )}
    </>
  );
};

export default Detail;
