import React, {useState} from "react";
import  axios  from "axios";
import "./Weather.css"
import { useState } from "react";

export default function Weather() {
    const [Weatherdata, setWeatherdata] =useState("");
    function handleSubmit(event) {
  event.preventDefault();
 
    }
    function handleResponse(){
        console.log(response.data);
    }
    return (
        <div className="Weather">
            <form className="form-handle"  onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search"
                 placeholder="Enter a city..." 
                 autoFocus={true}
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
            <h1 className="mt-5">Kogi</h1>
    
            <div className="row mt-3">
                <div className="col-8">
                    <p className="text-muted"><span className="Weather-description">Saturday 07:19, few clouds</span> <br />
                    <span className="Weather-description">Humidity:<span className="temp-data-value">78%</span>, Wind: <span className="temp-data-value">4.92km/h</span></span></p>
                    </div>
                <div className="col-4 d-flex justify-content-end">
                    <div className="img-box">
                        <span className="main-img">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className="img-flud" alt ="Icon image" />
                </span>
                <span className="temp-value"><strong>64</strong></span>
               
                <span className="temp-unit">°C</span>
                </div>
                 </div>
            </div>
</div>
    );
     axios.get(apiUrl).then(handleResponse);
}