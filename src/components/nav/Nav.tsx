import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { Col } from "reactstrap";
import ImageAvatars from "./avatar";
import Modal from "react-bootstrap/Modal";
import "./Nav.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontSize: '13px',
  },
});

export default function SimpleBottomNavigation(props: any) {
  const { onOearestCabin } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [agenda, setAgenda] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showModalCancel = () => {
    setIsOpen(true);
  };

  const hideModalCancel = () => {
    setIsOpen(false);
  };

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
        style={{marginBottom: '20px'}}
      >
        <span className="text-name">BINO DA SILVA</span>
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
            icon={<NearMeOutlinedIcon fontSize={'large'} />}
            onClick={onOearestCabin}
          />
        {!agenda ? (
          <BottomNavigationAction
            type="button"
            onClick={showModalCancel}
            className="btn-blue"
            label="Agendar Consulta"
            icon={<CalendarTodayIcon fontSize={'large'} />}
          />):null}
          {agenda ? (
          <BottomNavigationAction
            type="button"
            onClick={showModalCancel}
            className="btn-blue"
            label="Cancelar Consulta"
            icon={<CalendarTodayIcon fontSize={'large'} />}
          />):null}
          <BottomNavigationAction
            className="btn-blue"
            label="Destravar Cabine"
            icon={<LockOpenOutlinedIcon fontSize={'large'} />}
          />

        </BottomNavigation>
      </Col>
      {/* <button onClick={showModalCancel}>Display Modal</button> */}
      <Modal show={isOpen} onHide={hideModalCancel}>
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
    </div>
  );
}
