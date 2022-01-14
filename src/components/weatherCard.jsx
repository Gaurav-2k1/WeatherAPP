import React, { useEffect, useState } from "react";
import ForecastItems from "./forecastItems";
import InfoItems from "./infoItems";
import "../style/style.scss"

const WeatherCard = () => {
    const [search, setSearch] = useState("Pune");
    const [tempInfo, setTempInfo] = useState("");



    const getWeatherInfo = async () => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c393909c0f53cf7d9eabe97aae9bf587&units=metric`;
            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure, temp_min, temp_max } = data.main;
            const { main: weathermood, icon: weatherIcon } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset, sunrise } = data.sys;
            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset, temp_min, temp_max, sunrise, weatherIcon
            };
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error)
        }
    }

    let imgurl = `http://openweathermap.org/img/wn/${tempInfo.weatherIcon}@4x.png`


    useEffect(() => {
        getWeatherInfo();
    }, []);

    let secset = tempInfo.sunset;
    let date = new Date(secset * 1000);
    let sunsettime = `${date.getHours()}:${date.getMinutes()}`

    let secrise = tempInfo.sunrise;
    let daterise = new Date(secrise * 1000);
    let sunriseTime = `${daterise.getHours()}:${daterise.getMinutes()}`



    return (
        <>
            <div className="TextField">


                <input type="search"
                    value={search}
                    className="input"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                    placeholder="Search"
                />
                <button className="searchButton" type="button" onClick={getWeatherInfo}>search</button>

            </div>
            {
                (!tempInfo) ? <p className="NoData">No Data to Show</p>
                    : <div>
                        <div className="cityName">

                            <h1>{tempInfo.name},{tempInfo.country}</h1>
                            <span>
                                Wednesday | April</span>
                        </div>
                        <div className="info">
                            <div className="infoleft"><div className="infoIcon"><img className="infoIcon" src={imgurl} /></div>
                                <div className="infoinner"><h1>{tempInfo.temp}°C</h1><h4>{tempInfo.weathermood}</h4></div>
                            </div>
                            <div className="infoDetail">
                                <InfoItems info={tempInfo.temp_min} infoName="Min" suffix="°C" />
                                <InfoItems info={tempInfo.speed} infoName="Wind" suffix="mph" />
                                <InfoItems info={sunriseTime} infoName="Sunrise" suffix="hrs" />
                                <InfoItems info={tempInfo.temp_max} infoName="Max" suffix="°C" />
                                <InfoItems info={tempInfo.humidity} infoName="Rain" suffix="%" />
                                <InfoItems info={sunsettime} infoName="Sunset" suffix="hrs" />



                            </div>

                        </div>
                        <div className="New_Forcast">
                            <h1>Forecast</h1>
                            <div className="fore_row">
                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Sunday" />
                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Monday" />

                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Tuesday" />

                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Wednesday" />
                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Thursday" />
                                <ForecastItems sunrise="6:50" sunset="7:20" temp="5" day="Friday" />


                            </div>

                        </div>
                    </div>
            }





        </>
    )
}



export default WeatherCard;