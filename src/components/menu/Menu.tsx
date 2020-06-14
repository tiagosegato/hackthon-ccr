import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { Col, Row } from "reactstrap";
import './menu.css';

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '96%',
    top: '5px',
    position: 'absolute',
    zIndex: 1000,
    margin: "2%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <>
      <Row>
        <Col
          className="d-flex justify-content-center"
          xs="12"
          md="12"
          lg="12"
          style={{ marginBottom: "20px", zIndex: 9999 }}
        >
          <span className="text-viagem">
            <b>VIAGEM</b>
          </span>
        </Col>
      </Row>
      <Paper
        style={{ marginTop: "22px" }}
        component="form"
        className={classes.root}
      >
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Buscar Atendimento"
          inputProps={{ "aria-label": "Buscar atendimento" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default Menu;
