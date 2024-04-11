import React from "react";

export default function WeatherTemperature(props){

    return(
    <div className="WeatherTemperature">
        <span className="main-img">
         <span className="temp-value"><strong>{Math.round(props.celsius)}</strong>
         </span>
        <span className="temp-unit">°C
        </span>
        </span>
    </div>
    );
}