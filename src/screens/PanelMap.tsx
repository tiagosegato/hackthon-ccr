/* eslint-disable import/first */

import React, { lazy, useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Button from '@material-ui/core/Button';
const MenuSuperior = lazy(() => import('../components/menu/Menu'));
const Nav = lazy(() => import('../components/nav/Nav'));
import getLocation from "../helpers/utils";

import ppd from "../data/ppd.json"; // pontos de parada e descanço

export const icon = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
});

const PanelMap: React.FC = () => {

    getLocation().then(position => {
        console.log('fasd', position)
    })

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
                    //icon={icon}
                    >
                        <Popup>
                            <div>
                                <h2>{p.name}</h2>
                                <p>{p.description}</p>

                                <div style={{ textAlign: 'center' }}>
                                    <Button style={{ padding: 15 }} variant="outlined" color="primary">Agendar consulta</Button>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <Nav />
            </Map>
        </>
    )
};

export default PanelMap;