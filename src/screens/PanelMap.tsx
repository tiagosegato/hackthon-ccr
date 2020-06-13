import React, { lazy, useEffect, useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import useSwr from "swr";
import { Icon } from "leaflet";
const MenuSuperior = lazy(() => import('./Menu'));
const Nav = lazy(() => import('../components/nav/Nav'));

export const icon = new Icon({
    iconUrl: "/skateboarding.svg",
    iconSize: [25, 25]
});

const fetcher = (args: any) => fetch(args).then(response => response.json());

const PanelMap: React.FC = () => {

    const [activePoint, setActivePoint]: any = useState(null);

    const url =
        "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const { data, error } = useSwr(url, { fetcher });
    const crimes = data && !error ? data.slice(0, 100) : [];

    return (
        <>
            <MenuSuperior />

            <Map center={[52.63, -1.125]} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {crimes.map((p: any) => (
                    <Marker
                        key={p.id}
                        position={[p.location.latitude, p.location.longitude]}
                        onClick={() => {
                            setActivePoint(p);
                        }}
                    //icon={icon}
                    />
                ))}

                {activePoint && (
                    <Popup
                        position={[
                            activePoint.location.latitude,
                            activePoint.location.longitude
                        ]}
                        onClose={() => {
                            setActivePoint(null);
                        }}
                    >
                        <div>
                            <h2>{activePoint.category}</h2>
                            <p>{activePoint.month}</p>
                        </div>
                    </Popup>
                )}
            </Map>

            <Nav />
        </>
    )
};

export default PanelMap;