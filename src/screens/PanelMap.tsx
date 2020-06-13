/* eslint-disable import/first */

import React, { lazy, useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import useSwr from "swr";
import { Icon } from "leaflet";
const MenuSuperior = lazy(() => import('../components/menu/Menu'));
const Nav = lazy(() => import('../components/nav/Nav'));

import ppd from "../data/ppd.json"; // pontos de parada e descanço

export const icon = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
});

const PanelMap: React.FC = () => {

    const [activePoint, setActivePoint]: any = useState(null);

    return (
        <>
            <Map center={[-23, -44.8]} zoom={7}>

                <MenuSuperior />

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {ppd.map((p: any) => (
                    <Marker
                        key={p.name}
                        position={[p.latitude, p.longitude]}
                        onClick={() => {
                            setActivePoint(p);
                        }}
                    //icon={icon}
                    />
                ))}

                {activePoint && (
                    <Popup
                        position={[
                            activePoint.latitude,
                            activePoint.longitude
                        ]}
                        onClose={() => {
                            setActivePoint(null);
                        }}
                    >
                        <div>
                            <h2>{activePoint.name}</h2>
                            <p>{activePoint.description}</p>
                        </div>
                    </Popup>
                )}
                <Nav />
            </Map>
        </>
    )
};

export default PanelMap;