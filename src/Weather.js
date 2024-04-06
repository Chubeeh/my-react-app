import React from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <input type="search" placeholder="Enter a city..." />
                <input type="submit" value="Search"/>
            </form>
            <h1>Kogi</h1>
            <div className="row">
                <div className="col-6">
            <p>    Saturday 07:19, few clouds <br />
                    Humidity: 78%, Wind: 4.92km/h</p>
                    </div>
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt ="Icon image" />
                6°C
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <li>
                        <p>Sat</p>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Image 1" />
                    <p>18°7°</p>
                    </li>
                </div>
                
                <div className="col-2">
                    <li>
                        <p>Sun</p>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Image 1" />
                    <p>12°7°</p>
                    </li>
                </div>
                <div className="col-2">
                    <li>
                        <p>Mon</p>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Image 1" />
                    <p>4°7°</p>
                    </li>
                </div>
                <div className="col-2">
                    <li>
                        <p>Tue</p>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Image 1" />
                    <p>12°9°</p>
                    </li>
                </div>
            <div className="col-2">
                    <li>
                        <p>Wed</p>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Image 1" />
                    <p>6°7°</p>
                    </li>
                </div>
                  </div>
        </div>
    );
}