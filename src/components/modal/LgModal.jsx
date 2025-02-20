import React from "react";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";

const LgModal = ({ children, title, onShow, handleClose }) => {
  return (
    <>
      <Modal show={onShow} onHide={handleClose} centered animation={false} size="lg">
        <ModalBody className="p-lg-4">
          <button
            type="button"
            className="close rounded-circle"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <ModalTitle className="text-center my-4">{title}</ModalTitle>
          {children}
        </ModalBody>
      </Modal>
    </>
  );
};

export default LgModal;
