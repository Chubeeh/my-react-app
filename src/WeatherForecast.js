import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props){
   const [ready, setReady] = useState(false);
   const [forecast, setForecast] = useState("");
    function handleResponse(response){
        setForecast(response.data.daily);
        setReady(true);
    }
if (ready) {
    console.log(forecast[0].weather[0]);
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WatherForecast-day">
                        {forecast[0].dt}
                    </div>
                        <WeatherIcon code={forecast[0].weather[0].icon} size ={36}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temp.max)}°</span>
                         <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temp.min)}°</span>
                    </div>
                </div>
            </div>
        </div>
    );

    } else {
    let apiKey ="8ca7dd4e61360b90fb66918853670e48";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`


    Axios.get(apiUrl).then(handleResponse);

    return null;
    }
}