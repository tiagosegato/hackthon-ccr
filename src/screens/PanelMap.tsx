/* eslint-disable import/first */

import React, { lazy, useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Button from "@material-ui/core/Button";
const MenuSuperior = lazy(() => import("../components/menu/Menu"));
const Nav = lazy(() => import("../components/nav/Nav"));
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Row, Col } from "reactstrap";
import TimePickers from "../components/time";
import DateAndTimePickers from "../components/date";

import ppd from "../data/ppd.json"; // pontos de parada e descanço

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25],
});

const PanelMap: React.FC = () => {
  const [activePoint, setActivePoint]: any = useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Map center={[-23, -44.8]} zoom={7}>
        <MenuSuperior />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {ppd.map((p: any, i) => (
          <Marker
            key={i + 1}
            position={[p.latitude, p.longitude]}
            onClick={() => {
              setActivePoint(p);
            }}
            //icon={icon}
          >
            <Popup
              onClose={() => {
                setActivePoint(null);
              }}
            >
              <div>
                <h4>{p.name}</h4>
                <p>{p.description}</p>

                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{ padding: 15 }}
                    onClick={showModal}
                    variant="outlined"
                    color="primary"
                  >
                    Agendar consulta
                  </Button>
                  <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                      <Modal.Title>Agendamento de Consulta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
  
                      <Row>
                        <Col
                          className="d-flex justify-content-center"
                          xs="12"
                          md="12"
                          lg="12"
                          style={{marginBottom: '20px', width: '100%'}}
                        >
                          <DateAndTimePickers />
                        </Col>
                      </Row>
                       <Row>
                        <Col
                          className="d-flex justify-content-center"
                          xs="12"
                          md="12"
                          lg="12"
                          style={{width: '100%'}}
                        >
                          <TimePickers />
                        </Col>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <button className="btn btn-danger" onClick={hideModal}>
                        Cancelar
                      </button>
                      <button className="btn btn-success">Agendar</button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <Nav />
      </Map>
    </>
  );
};

export default PanelMap;
