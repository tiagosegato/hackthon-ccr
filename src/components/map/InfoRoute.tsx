import React from 'react';
import { convertMS } from "../../helpers/utils";
import "./Map.css";

const InfoRoute = (props: any) => {

    const { infoRounte } = props;
    const totalDistance = (infoRounte.summary.totalDistance / 1000).toFixed(2);
    const totalTime = convertMS(infoRounte.summary.totalTime);
    return (
        <div className="infosRoute">
            <div className="content">
                <strong>Distância: </strong><span>{totalDistance} km </span>
                <strong>Tempo: </strong>
                {totalTime.day>0 && <span>{totalTime.day} dia(s) </span>}
                {totalTime.hour>0 && <span>{totalTime.hour} horas(s) </span>}
                {totalTime.minute>0 && <span>{totalTime.minute} minuto(s) </span>}
            </div>
        </div>
    )

}

export default InfoRoute;