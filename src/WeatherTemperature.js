import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return  (props.celsius * 9) /5 + 32;
    }

    if (unit === "celsius"){
    return(
    <div className="WeatherTemperature">
        <span className="main-img">
         <span className="temp-value"><strong>{Math.round(props.celsius)}</strong>
         </span>
        <span className="temp-unit">°C |{""}
        <a href="" onClick={showFahrenheit}>°F </a>
        </span>
        </span>
    </div>
    );
    } else {
        return(
    <div className="WeatherTemperature">
        <span className="main-img">
         <span className="temp-value"><strong>{Math.round(fahrenheit())}</strong>
         </span>
        <span className="temp-unit"><a href="" onClick={showCelsius}>°C</a>{""} | °F
        </span>
        </span>
    </div>
    );
    }
}