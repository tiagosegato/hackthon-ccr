import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SpeedIcon from "@material-ui/icons/Speed";
import { Container, Row, Col } from "reactstrap";
import ImageAvatars from "./avatar";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container className="nav-bar">
      <Col xs="12" md="12" lg="12">
        <ImageAvatars />
      </Col>
       <Col style={{marginTop: '10px'}} className="back" xs="12" md="12" lg="12">
        <span className="text-name"><b>HS785K</b></span>
      </Col>
      <Col style={{marginBottom: '12px'}} className="back" xs="12" md="12" lg="12">
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
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            className="btn-blue"
            label="Cabine mais rapida"
            icon={<SpeedIcon />}
          />
          <BottomNavigationAction
            className="btn-blue"
            label="Agendar Consulta"
            icon={<CalendarTodayIcon />}
          />
        </BottomNavigation>
      </Col>
    </Container>
  );
}
