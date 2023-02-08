import React from 'react'
import './CityName.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function CityName(props) {
  const { weather, currentData } = props;

  let d = new Date();

  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

 

  let month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  let dayName = weekday[d.getDay()];
  let monthsName = month[d.getMonth()];
  let date1 = d.getDate();
 
  return (
    <div className="cityNameAndDate">
      <div className="cityName">
        <div><LocationOnIcon className="loc" /></div>
        <div>
          <h1>{weather?.city.name === undefined ? `${currentData?.city.name}, ${currentData?.city.country}` : `${weather?.city.name}, ${weather?.city.country}`}</h1>
        </div>
      </div>
      <div className="dateName">
        <p>{`${dayName}`}, {date1} {monthsName}</p>
      </div>
    </div>
  )
}

export default CityName
