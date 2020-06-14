import React from 'react';
import Modal from "react-bootstrap/Modal";
import TimePickers from "../TimePickers";

const ScheduleModal = (props: any) => {
  const { show, onHide }: any = props;

  return (
    <Modal show={show} onHide={onHide} className="align-items-center">
    <Modal.Header>
      <Modal.Title>Horários disponiveis:</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <TimePickers />
    </Modal.Body>
    <Modal.Footer>
      <button
        className="btn btn-danger"
        onClick={onHide}
      >
        Cancelar
      </button>
      <button className="btn btn-success">
        Confirmar Consulta
      </button>
    </Modal.Footer>
  </Modal>
  );
}

export default ScheduleModal;
