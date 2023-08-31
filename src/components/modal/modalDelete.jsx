// import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import deleteProductAction from "../../config/redux/actions/ProcuctsActions/deleteProductAction";

function ModalDelete({ product_id, children }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteProductAction(product_id, setShow));
  };

  return (
    <>
      <Button className="m-1" variant="danger" onClick={handleShow}>
        {children}
      </Button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Delete product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h4 className="text-center">
              Are you sure wannna delete this product?
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalDelete;
