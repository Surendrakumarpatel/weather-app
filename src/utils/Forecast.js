import './Forecast.css';
import Slider from 'react-slick';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import fewcloudss from "./images/fewcloud.png";
import { Link } from 'react-router-dom';
 
 
function Forecast(props) {
  const {weather,currentData} = props;

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
  };
  // let searchableCloudsId = weather?.list[0]?.weather[0]?.id;
  // let currentCloudsId = currentData?.list[0]?.weather[0]?.id;
 return (
    <div className="slider">
      <div className="sliderHeading">
        <div><h1>Today</h1></div>
        <div style={{display:"flex",alignItems:"center",}}>
          
          <h4><Link to="/fivedays">Next 5 Days</Link></h4>
          
         <NavigateNextIcon style={{position:"relative",left:"-4%",color:"#5c93f3",fontSize:"30px",cursor:"pointer"}}/>
        </div>
        
      </div>
      <Slider {...settings}>
        <div className="box">
          <h2>11:30AM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[0].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[0].main?.temp)}°` : `${Math.floor(weather?.list[0].main.temp)}°`}</h1>
        </div>
        <div className="box">
          <h2>2:30PM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[1].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[1].main?.temp)}°` : `${Math.floor(weather?.list[1].main.temp)}°`}</h1>
        </div>
        <div className="box">
          <h2>5:30PM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[2].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[2].main?.temp)}°` : `${Math.floor(weather?.list[2].main.temp)}°`}</h1>
        </div>
        <div className="box">
          <h2>8:30PM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[3].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[3].main?.temp)}°` : `${Math.floor(weather?.list[3].main.temp)}°`}</h1>
        </div>
        <div className="box">
          <h2>11:30PM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[4].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[4].main?.temp)}°` : `${Math.floor(weather?.list[4].main.temp)}°`}</h1>
        </div>
        <div className="box">
          <h2>2:30AM</h2>
          <img src={fewcloudss} alt="img" />
          <h1>{ (weather?.list[5].main.temp) ===  undefined  ? `${Math.floor(currentData?.list[5].main?.temp)}°` : `${Math.floor(weather?.list[5].main.temp)}°`}</h1>
        </div>
      </Slider>
    </div>

  )
}

export default Forecast
