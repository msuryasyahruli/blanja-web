import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import createProductAction from "../../config/redux/actions/createProductAction";

const SellingProduct = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    id_category: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductAction(data, photo, setShow));
  };

  return (
    <>
      <div
        className="tab-pane fade"
        id="v-pills-Order"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
        style={{ padding: "50px 0" }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>Inventory</h4>
                <hr />
                <h6>Name</h6>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </section>
          </div>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px 0",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>Item details</h4>
                <hr />
                <h6>Price</h6>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                />
                <br />
                <h6>Stock</h6>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="stock"
                  name="stock"
                  value={data.stock}
                  onChange={handleChange}
                />
                <br />
                <h6>Category</h6>
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label
                    className="btn"
                  >
                    <input
                      type="radio"
                      name="id_category"
                      id="option1"
                      onChange={handleChange}
                      value={"1"}
                    />{" "}
                    T-Shirt
                  </label>
                  <label
                    className="btn"
                  >
                    <input
                      type="radio"
                      name="id_category"
                      id="option2"
                      onChange={handleChange}
                      value={"2"}
                    />{" "}
                    Short
                  </label>
                  <label
                    className="btn"
                  >
                    <input
                      type="radio"
                      name="id_category"
                      id="option3"
                      onChange={handleChange}
                      value={"3"}
                    />{" "}
                    Pants
                  </label>
                  <label
                    className="btn"
                  >
                    <input
                      type="radio"
                      name="id_category"
                      id="option4"
                      onChange={handleChange}
                      value={"4"}
                    />{" "}
                    Jacket
                  </label>
                  <label
                    className="btn"
                  >
                    <input
                      type="radio"
                      name="id_category"
                      id="option4"
                      onChange={handleChange}
                      value={"5"}
                    />{" "}
                    Shoes
                  </label>
                </div>
                {/* <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="category"
                  name="id_category"
                  value={data.id_category}
                  onChange={handleChange}
                /> */}
              </div>
            </section>
          </div>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px 0",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>Photo of goods</h4>
                <hr />
                <h6>Photo</h6>
                <input
                  type="file"
                  className="form-control mt-3 p-1"
                  placeholder="photo"
                  name="photo"
                  onChange={handleUpload}
                />
              </div>
            </section>
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <section>
              <div className="p-3">
                <h4>Description</h4>
                <hr />
                <h6>Description</h6>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="description"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                />
              </div>
            </section>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                width: 128,
                height: 48,
                backgroundColor: "#db3022",
                border: 0,
                borderRadius: 50,
                color: "#efefef",
                margin: 15,
              }}
              type="submit"
              className="btn btn-primary"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SellingProduct;
