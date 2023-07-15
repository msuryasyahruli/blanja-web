// import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProductAction from "../../config/redux/actions/updateProductAction";

function ModalUpdate({id,name,stock,price,description,id_category,children}) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name,
    stock,
    price,
    description,
    id_category,
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
    dispatch(updateProductAction(data, id, photo, setShow))
  };

  return (
    <>
      <Button className="m-1" variant="warning" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="stock"
              name="stock"
              value={data.stock}
              onChange={handleChange}
            />
            <input
              type="file"
              className="form-control mt-3 p-1"
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="id_category"
              name="id_category"
              value={data.id_category}
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
