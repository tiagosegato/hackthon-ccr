import React from 'react';
import Modal from "react-bootstrap/Modal";

const ScheduleModal = (props: any) => {
  const { show, title, text, onHide }: any = props;

  return (
    <Modal 
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {text}
    </Modal.Body>
    <Modal.Footer>
      <button className="btn btn-success" onClick={onHide}>
        Ok
      </button>
    </Modal.Footer>
  </Modal>
  );
}

export default ScheduleModal;
