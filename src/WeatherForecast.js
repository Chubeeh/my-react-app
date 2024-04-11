import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
   const [ready, setReady] = useState(false);
   const [forecast, setForecast] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setReady(true);
    }
if (ready) {
    return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                if (index < 7){
                    return (
                <div className="col" key ={index}>
                    <WeatherForecastDay data = {dailyForecast} />
                </div>
                );
            }
            })}
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