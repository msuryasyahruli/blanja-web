// import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProductAction from "../../config/redux/actions/updateProductAction";
import axios from "axios";

function ModalUpdate({
  product_id,
  product_name,
  product_stock,
  product_price,
  product_description,
  category_id,
  children,
}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    product_name,
    product_stock,
    product_price,
    product_description,
    category_id,
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(data, product_id, photo, setShow));
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/category`)
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Button className="m-1" variant="warning" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="name"
              name="product_name"
              value={data.product_name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="price"
              name="product_price"
              value={data.product_price}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="stock"
              name="product_stock"
              value={data.product_stock}
              onChange={handleChange}
            />
            <div class="form-group" style={{ marginTop: "16px" }}>
              <select
                class="form-control"
                name="category_id"
                value={data.category_id}
                onChange={handleChange}
              >
                <option selected>Select category</option>
                {category.map((category) => (
                  <option value={category.category_name}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="file"
              className="form-control mt-3 p-1"
              placeholder="photo"
              name="product_photo"
              onChange={handleUpload}
            />
            <textarea
              type="text"
              className="form-control mt-3"
              placeholder="description"
              name="product_description"
              value={data.product_description}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-warning">
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalUpdate;
