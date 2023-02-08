import React from 'react'
import './FiveDays.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
 
import wind from './utils/images/wind.png';
import humidity from './utils/images/humidity.png';
import pressure from './utils/images/pressure.png';

function FiveDays(props) {
  const {weather, currentData } = props;

  let d = new Date();
 
  let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const checkDay = (i) => {
    if (i + d.getDay() > 6) {
      return (i + d.getDay() - 7);
    } else {
      return (i + d.getDay());
    }
  }
  return (
      <div className="FiveDays">
        <div className="compo">
          <div className="weatherDetails">
            <div className="div0">
              <div className="div1">
                <div className="backArrow">
                  <Link to="/"><ArrowBackIosIcon style={{ position: "relative", left: "4px", top: "2px", padding: "0px", margin: "0px", color: "white", fontSize: "20px" }} /></Link>
                </div>
                <div className="nextFiveDays"><h1>Next 5 Days</h1></div>
              </div>
              <div className="div2">
                <div className="cloudsImg">
                  {(weather?.list[2].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[2].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[2].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[2].weather[0].icon}.png`} alt="weather icon" />)}
                </div>
                <div className="txt">
                  <h3>Tommorow</h3>
                  <h1>{(weather?.list[2].main.temp) === undefined ? `${Math.floor(currentData?.list[2].main?.temp)}°` : `${Math.floor(weather?.list[2].main.temp)}°`}</h1>
                  <p>{weather?.list[2].weather[0].main === undefined ?( currentData?.list[2].weather[0].main === "Rain" ? "Rain" : currentData?.list[2].weather[0].main === "Clouds" ? "Cloudy day" : "Clear day") : (weather?.list[2].weather[0].main === "Rain" ? "Rain" : weather?.list[2].weather[0].main === "Clouds" ? "Cloudy day" : "Clear day")}</p>
                </div>
              </div>

              <div className="windDetails">
                <div className="wind1">
                  <img src={wind} alt="image"/>
                  <span>{weather?.list[0].wind.speed === undefined ? `${parseInt((currentData?.list[0].wind.speed) * 18 / 5)}km/h` : `${parseInt(Math.floor(weather?.list[0].wind.speed) * 18 / 5)}km/h`}</span>
                </div>
                <div className="humidity1">
                  <img src={humidity} alt="image"/>
                  <span>{weather?.list[0].main.humidity === undefined ? `${currentData?.list[0].main.humidity}%` : `${weather?.list[0].main.humidity}%`}</span>
                </div>
                <div className="pressure1">
                  <img src={pressure} alt="image"/>
                  <span>{weather?.list[0].main.pressure === undefined ? `${currentData?.list[0].main.pressure}hPa` : `${weather?.list[0].main.pressure}hPa`}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="fiveDaysDetails">
            <div className="mon">
              <div><h2>{weekDay[checkDay(1)]}</h2></div>
              <div className="common">
                {(weather?.list[2].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[2].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[2].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[2].weather[0].icon}.png`} alt="weather icon" />)}
                <h4>{weather?.list[2].weather[0].main === undefined ? currentData?.list[2].weather[0].main:weather?.list[2].weather[0].main}</h4>
              </div>
              <div className="temp"><h2>{weather?.list[2].main.temp_max === undefined ? Math.round(currentData.list[2].main.temp_max) + "°" : Math.round(weather?.list[2].main.temp_max) + "°"}</h2></div>
            </div>
            <div className="mon">
              <div><h2>{weekDay[checkDay(2)]}</h2></div>
              <div className="common">
                {(weather?.list[10].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[10].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[10].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[10].weather[0].icon}.png`} alt="weather icon" />)}
                <h4>{weather?.list[10].weather[0].main === undefined ? currentData?.list[10].weather[0].main:weather?.list[10].weather[0].main}</h4>
              </div>
              <div className="temp"><h2>{weather?.list[10].main.temp_max === undefined ? Math.round(currentData.list[10].main.temp_max) + "°" : Math.round(weather?.list[10].main.temp_max) + "°"}</h2></div>
            </div>
            <div className="mon">
              <div><h2>{weekDay[checkDay(3)]}</h2></div>
              <div className="common">
                {(weather?.list[18].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[18].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[18].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[18].weather[0].icon}.png`} alt="weather icon" />)}
                <h4>{weather?.list[18].weather[0].main === undefined ? currentData?.list[18].weather[0].main:weather?.list[18].weather[0].main}</h4>
              </div>
              <div className="temp"><h2>{weather?.list[18].main.temp_max === undefined ? Math.round(currentData.list[18].main.temp_max) + "°" : Math.round(weather?.list[18].main.temp_max) + "°"}</h2></div>
            </div>
            <div className="mon">
              <div><h2>{weekDay[checkDay(4)]}</h2></div>
              <div className="common">
                {(weather?.list[26].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[26].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[26].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[26].weather[0].icon}.png`} alt="weather icon" />)}
                <h4>{weather?.list[26].weather[0].main === undefined ? currentData?.list[26].weather[0].main:weather?.list[26].weather[0].main}</h4>
              </div>
              <div className="temp"><h2>{weather?.list[26].main.temp_max === undefined ? Math.round(currentData.list[26].main.temp_max) + "°" : Math.round(weather?.list[26].main.temp_max) + "°"}</h2></div>
            </div>
            <div className="mon">
              <div><h2>{weekDay[checkDay(5)]}</h2></div>
              <div className="common">
                {(weather?.list[34].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${weather?.list[34].weather[0].icon}.png`} alt="weather icon" />) || (currentData?.list[34].weather[0].icon && <img src={`http://openweathermap.org/img/wn/${currentData?.list[34].weather[0].icon}.png`} alt="weather icon" />)}
                <h4>{weather?.list[34].weather[0].main === undefined ? currentData?.list[34].weather[0].main:weather?.list[34].weather[0].main}</h4>
              </div>
              <div className="temp"><h2>{weather?.list[34].main.temp_max === undefined ? Math.round(currentData.list[34].main.temp_max) + "°" : Math.round(weather?.list[34].main.temp_max) + "°"}</h2></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FiveDays;
