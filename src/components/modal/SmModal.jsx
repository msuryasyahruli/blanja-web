import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const SmModal = ({ children, title, onShow, handleClose }) => {
  return (
    <>
      <Modal show={onShow} onHide={handleClose} centered animation={false} className="shadow">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <button
            type="button"
            className="close rounded-circle"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default SmModal;
