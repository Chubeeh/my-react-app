import React, {useState} from "react";
import  axios  from "axios";
import { RotatingLines } from 'react-loader-spinner';
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] =useState({loaded: false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            loaded: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            date: "Saturday 07:15",
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            city: response.data.name


           
        });
        
    }
    if (weatherData.loaded){
    return (
        <div className="Weather">
            <form className="form-handle">
                <div className="row">
                    <div className="col-9">
                <input type="search"
                 placeholder="Enter a city..." 
                 autoFocus="on"
                 className="input-form-one"
                 />
                </div>
                <div className="col-3">
                <input type="submit" 
                value="Search"
                className="input-form-two"
                />
                </div>
                </div>
            </form>
            <h1 className="mt-5">Kogi{weatherData.city}</h1>
    
            <div className="row mt-3">
                <div className="col-8">
                    <p className="text-muted"><span className="Weather-description">{weatherData.date} {weatherData.description}</span> <br />
                    <span className="Weather-description">Humidity:<span className="temp-data-value">{weatherData.humidity}%</span>, 
                    </span>Wind: <span className="temp-data-value">{weatherData.wind}km/h</span></p>
                    </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="img-box">
                        <span className="main-img">
                    <img src={weatherData.iconUrl} className="img-flud" alt ={weatherData.description} />
                </span>
                <span className="temp-value"><strong>{Math.round(weatherData.temperature)}</strong></span>
               
                <span className="temp-unit">°C</span>
                </div>
                 </div>
            </div>
</div>
    );} else {
    let apiKey ="c4a8tao19480ddff4eb37f66462cea94";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
    return (
         <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="yellow"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />) ;
    }
  
}