import React from 'react'
import './Wind.css';
import wind from './images/wind.png';
import humidity from './images/humidity.png';
import pressure from './images/pressure.png';
function Wind(props) {
  const { weather, currentData } = props;
  console.log(currentData?.list[0].wind.speed);
  return (
    <div className="information">
      <div className="wind">
        <div>
          <img src={wind} alt="img"/>
        </div>
        <div>
          <span>{weather?.list[0].wind.speed === undefined ? `${parseInt((currentData?.list[0].wind.speed) * 18 / 5)}km/h` : `${parseInt(Math.floor(weather?.list[0].wind.speed) * 18 / 5)}km/h`}</span>
        </div>
      </div>
      <div className="humidity">
        <div>
          <img src={humidity} alt="img"/>
        </div>
        <div>
          <span>{weather?.list[0].main.humidity === undefined ? `${currentData?.list[0].main.humidity}%` : `${weather?.list[0].main.humidity}%`}</span>
        </div>
      </div>
      <div className="pressure">
        <div>
          <img src={pressure} alt="img"/>
        </div>
        <div>
          <span>{weather?.list[0].main.pressure === undefined ? `${currentData?.list[0].main.pressure}hPa` : `${weather?.list[0].main.pressure}hPa`}</span>
        </div>
      </div>
    </div>
  )
}

export default Wind
