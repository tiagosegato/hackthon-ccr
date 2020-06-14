/* eslint-disable import/first */

import React, { lazy, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Button from '@material-ui/core/Button';
const MenuSuperior = lazy(() => import('../components/menu/Menu'));
const Nav = lazy(() => import('../components/nav/Nav'));
const Routing = lazy(() => import('../components/map/Routing'));
const InfoRoute = lazy(() => import('../components/map/InfoRoute'));
import { getLocation } from "../helpers/utils";

import ppd from "../data/ppd.json"; // pontos de parada e descanço

export const icon = new Icon({
    iconUrl: require("../components/img/caminhao.svg"),
    iconSize: [50, 50]
});

console.log(icon)

const PanelMap = () => {

    const [map, setMap] = useState(null);
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState([-22.716229, -43.716657]);
    const [infoRounte, setInfoRounte] = useState(null);

    // getLocation().then(position => {
    //     setLatLong([position.coords.latitude, position.coords.longitude])
    // });

    const onOearestCabin = (onOearestCabin) => {
        setFrom([-22.671036,-43.2888897]);
    };

    return (
        <>
            <Map center={[-23, -44.8]} zoom={7} ref={(map) => setMap(map)}>

                <MenuSuperior />

                {infoRounte && <InfoRoute infoRounte={infoRounte} />}

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {ppd.map((p, i) => (
                    <Marker
                        key={i + 1}
                        position={[p.latitude, p.longitude]}
                        //icon={icon}
                    >
                        <Popup>
                            <div>
                                <h2>{p.name}</h2>
                                <p>{p.description}</p>

                                <div style={{ textAlign: 'center' }}>
                                    <Button
                                        style={styles.btnPupupAgd}
                                        variant="outlined" color="primary"
                                    >
                                        Agendar consulta
                                    </Button>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {(map && from) && 
                    <Routing
                        from={from}
                        to={to}
                        map={map}
                        onInfoRounte={info => setInfoRounte(info)}
                    />}

                <Nav
                    onOearestCabin={onOearestCabin}
                />
            </Map>
        </>
    )
};

const styles = {
    btnPupupAgd: {
        padding: 15,
        color: '#4ba4be',
        border: '1px solid #4ba4be',
    },
}

export default PanelMap;
