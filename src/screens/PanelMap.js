/* eslint-disable import/first */
import React, { lazy, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Button from "@material-ui/core/Button";
const MenuSuperior = lazy(() => import("../components/menu/Menu"));
const Nav = lazy(() => import("../components/nav/Nav"));
const Routing = lazy(() => import("../components/map/Routing"));
const InfoRoute = lazy(() => import("../components/map/InfoRoute"));
const ScheduleModal = lazy(() => import("../components/modal/ScheduleModal"));
import LoaderSmall from "../components/loader/LoaderSmall";

//import { getLocation } from "../helpers/utils";

import ppd from "../data/ppd.json"; // pontos de parada e descanço

export const my_location = new Icon({
  iconUrl: require("../img/my_location.svg"),
  iconSize: [30, 30],
});

const PanelMap = () => {
  const [map, setMap] = useState(null);
  const [from, setFrom] = useState(null);
  const [to /*, setTo*/] = useState([-22.716229, -43.716657]);
  const [infoRounte, setInfoRounte] = useState(null);
  const [isOpenAgenda, setIsOpenAgenda] = useState(false);
  const [gettingRouting, setGettingRouting] = useState(false);

  const showModalAgenda = () => {
    setIsOpenAgenda(true);
  };

  const hideModalAgenda = () => {
    setIsOpenAgenda(false);
  };

  const onOearestCabin = () => {
    setFrom([-22.671036, -43.2888897]);
    // getLocation().then(position => {
    //   setFrom([position.coords.latitude, position.coords.longitude]);
    // });
  };

  return (
    <>
      <Map center={[-23, -44.8]} zoom={7} zoomControl={false} ref={(map) => setMap(map)}>
        <MenuSuperior />

        {gettingRouting && <LoaderSmall text="Calculando rota..." />}

        {infoRounte && <InfoRoute infoRounte={infoRounte} />}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          position={[-22.671036, -43.2888897]}
          icon={my_location}
          markerZoomAnimation={true}
        />

        {ppd.map((p, i) => (
          <Marker
            key={i + 1}
            position={[p.latitude, p.longitude]}
          >
            <Popup>
              <div>
                <h2>{p.name}</h2>
                <p>{p.description}</p>

                <div style={{ textAlign: "center" }}>
                  <Button
                    style={styles.btnPupupAgd}
                    variant="outlined"
                    color="primary"
                    onClick={showModalAgenda}
                  >
                    Agendar consulta
                  </Button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        <ScheduleModal
          show={isOpenAgenda}
          onHide={hideModalAgenda}
        />

        {map && from && (
          <Routing
            from={from}
            to={to}
            map={map}
            onGettingRouting={(b) => setGettingRouting(b)}
            onInfoRounte={(info) => setInfoRounte(info)}
          />
        )}

        <Nav onOearestCabin={onOearestCabin} />
      </Map>
    </>
  );
};

const styles = {
  btnPupupAgd: {
    padding: 15,
    color: "#4ba4be",
    border: "1px solid #4ba4be",
  },
};

export default PanelMap;
