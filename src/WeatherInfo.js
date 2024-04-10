import React from "react";
import PresentedDate from "./PresentedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
       <div className="WeatherInfo">
        <h1 className="mt-5">{props.data.city}</h1>
    
            <div className="row mt-3">
                <div className="col-8">
                    <p className="text-muted">
                        <span className="Weather-description">
                            <PresentedDate date={props.data.date} />, {props.data.description}
                        </span>
                        <span className="Weather-description">Humidity:<span className="red">{props.data.humidity}%</span>, Wind:<span className="red"> {props.data.wind}km/h</span></span>
                    </p>       
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="img-box">
                        <span className="main-img">
                            <WeatherIcon code={props.data.icon} size={50}/>  
                        </span>
                    </div>
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
       </div>
    );
}
