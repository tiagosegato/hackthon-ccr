/* eslint-disable import/first */

import React, { lazy, useRef, useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Button from '@material-ui/core/Button';
const MenuSuperior = lazy(() => import('../components/menu/Menu'));
const Nav = lazy(() => import('../components/nav/Nav'));
const Routing = lazy(() => import('../components/map/Routing'));
import getLocation from "../helpers/utils";

import ppd from "../data/ppd.json"; // pontos de parada e descanço

// export const icon = new Icon({
//     iconUrl: "/skateboarding.svg",
//     iconSize: [25, 25]
// });

const PanelMap = () => {

    const [map, setMap] = useState(null);
    const [latLong, setLatLong] = useState([]);

    getLocation().then(position => {
        setLatLong([position.coords.latitude, position.coords.longitude])
    });

    const saveMap = (newMap) => {
        setMap(newMap);
    };

    return (
        <>
            <Map center={[-23, -44.8]} zoom={7} ref={saveMap}>

                <MenuSuperior />

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

                {map && 
                    <Routing
                        from={[-22.667074, -43.843150]}
                        to={[-22.804023, -43.345699]}
                        map={map}
                        infoRounte={(s) => console.log('s: ', s)}
                    />}

                <Nav />
            </Map>
        </>
    )
};

const styles = {
    btnPupupAgd: {
        padding: 15,
        color: '#4ba4be',
        border: '1px solid #4ba4be',
    }
}

export default PanelMap;
