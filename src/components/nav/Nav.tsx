import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { Col } from "reactstrap";
import ImageAvatars from "./avatar";
import Modal from "react-bootstrap/Modal";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Horarios from "./horarios";
import Cabines from "./cabine";
import AlertModal from "../modal/AlertModal";
import "./Nav.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontSize: "13px",
  },
});

export default function SimpleBottomNavigation(props: any) {
  const { onOearestCabin } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [agenda, setAgenda] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAgenda, setIsOpenAgenda] = useState(false);
  const [isOpenDesbloqueio, setIsOpenDesbloqueio] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertText, setAlertText] = useState('');

  const showModalAgenda = () => {
    setIsOpenAgenda(true);
  };

  const hideModalAgenda = () => {
    setIsOpenAgenda(false);
  };

  const showModalDesbloqueio = () => {
    setIsOpenDesbloqueio(true);
  };

  const hideModalDesbloqueio = () => {
    setIsOpenDesbloqueio(false);
  };

  const showModalCancel = () => {
    setIsOpen(true);
  };

  const hideModalCancel = () => {
    setIsOpen(false);
  };

  const handleSchedule = () => {
    setIsOpenAgenda(false);
    setAlertTitle('Agenda de consulta');
    setAlertText('Agendado com sucesso');
    setShowAlert(true);
  }

  const handleUnlockCabin = () => {
    setIsOpenDesbloqueio(false);
    setAlertTitle('Cabine');
    setAlertText('Destravada com sucesso');
    setShowAlert(true);
  }

  const onHideAlertModal = () => {
    setShowAlert(false);
  }

  return (
    <div className="nav-bar">
      <Col xs="12" md="12" lg="12">
        <ImageAvatars />
      </Col>
      <Col
        className="back"
        xs="12"
        md="12"
        lg="12"
        style={{ marginBottom: "20px" }}
      >
        <span className="text-name"><b>BINO DA SILVA</b></span>
      </Col>
      <Col xs="12" md="12" lg="12">
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            className="btn-blue"
            label="Cabine mais próxima"
            icon={<NearMeOutlinedIcon fontSize={"large"} />}
            onClick={onOearestCabin}
          />
          {!agenda ? (
            <BottomNavigationAction
              type="button"
              onClick={showModalAgenda}
              className="btn-blue"
              label="Agendar Consulta"
              value={agenda}
              icon={<CalendarTodayIcon fontSize={"large"} />}
            />
          ) : null}
          {agenda ? (
            <BottomNavigationAction
              type="button"
              onClick={showModalCancel}
              className="btn-blue"
              value={agenda}
              label="Cancelar Consulta"
              icon={<CalendarTodayIcon fontSize={"large"} />}
            />
          ) : null}
          <BottomNavigationAction
            onClick={showModalDesbloqueio}
            className="btn-blue"
            label="Destravar Cabine"
            icon={<LockOpenOutlinedIcon fontSize={"large"} />}
          />
        </BottomNavigation>
      </Col>


      <AlertModal
        show={showAlert}
        title={alertTitle}
        text={alertText}
        onHide={onHideAlertModal}
      />

      <Modal
        style={{ maxHeight: "300px" }}
        show={isOpen}
        onHide={hideModalCancel}
      >
        <Modal.Header>
          <Modal.Title>Tem certeza que deseja cancelar?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Algumas doenças são silenciosas e não possuem sintomas até já estarem
          completamente instaladas e afetando sua saúde. Por isso é muito
          importante consultar um médico e fazer alguns exames com
          periodicidade, mesmo não apresentando nada fora do normal.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={hideModalCancel}>
            Fechar
          </button>
          <button className="btn btn-danger">Cancelar</button>
        </Modal.Footer>
      </Modal>
      <Modal show={isOpenAgenda} onHide={hideModalAgenda}>
        <Modal.Header>
          <Modal.Title>Agendamento de Consulta:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col
            className="d-flex justify-content-center"
            xs="12"
            md="12"
            lg="12"
            style={{ marginBottom: "10px" }}
          >
            <span>CABINE KBN-51</span>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs="12"
            md="12"
            lg="12"
            style={{ marginBottom: "10px" }}
          >
            <span>
              Selecione o melhor dia e horário para realizar sua consulta:
            </span>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs="12"
            md="12"
            lg="12"
          >
            <Calendar calendarType={"ISO 8601"} minDetail={"month"} />
          </Col>
          <Col xs="12" md="12" lg="12">
            <Horarios />
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleSchedule}>Agendar</button>
          <button className="btn btn-danger" onClick={hideModalAgenda}>
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={isOpenDesbloqueio}
        onHide={hideModalDesbloqueio}
      >
        <Modal.Header>
          <Modal.Title>DESTRAVAR CABINE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs="12" md="12" lg="12">
            <p>Selecione qual a cabine que deseja destravar!</p>

            <p>
              Caso ainda não tenha chegado na sua cabine clique em IR PARA e
              localize uma nova cabine.
            </p>
          </Col>

          <Col xs="12" md="12" lg="12">
            <Cabines />
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={hideModalDesbloqueio}>
            IR PARA
          </button>
          <button className="btn btn-primary" onClick={handleUnlockCabin}>DESTRAVAR</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
