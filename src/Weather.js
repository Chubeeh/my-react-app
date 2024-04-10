import React, {useState} from "react";
import  axios  from "axios";
import WeatherInfo from "./WeatherInfo";
import { RotatingLines } from 'react-loader-spinner';
import "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] =useState({loaded: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            loaded: true,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon,
            city: response.data.city
           
        });
        
    }
    function search(){
        let apiKey ="c4a8tao19480ddff4eb37f66462cea94";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
        setCity(event.target.value);
    }

    if (weatherData.loaded){
    return (
        <div className="Weather">
            <form className="form-handle" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search"
                 placeholder="Enter a city..." 
                 autoFocus="on"
                 className="input-form-one"
                 onChange={handleCityChange}
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
     <WeatherInfo data={weatherData}/>
             
</div>
    );} else {
        search();
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