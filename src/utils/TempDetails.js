import './TempDetails.css';
import Rain from "./images/rain.png";
import clearsky from "./images/sunny.png";
import fewclouds from "./images/fewcloud.png";
import brokenCloud from "./images/brokenCloud.png";
import overcastCloud from "./images/overcastCloud.png";
import scatteredCloud from "./images/scatteredCloud.png";
function TempDetails(props) {

    const { weather, currentData } = props;
    let searchableCloudsId = weather?.list[0]?.weather[0]?.id;
    let currentCloudsId = currentData?.list[0]?.weather[0]?.id;


    let clouds
    if (searchableCloudsId === undefined) {
        if (currentCloudsId === 802) {
            clouds = scatteredCloud;
        } else if (currentCloudsId === 800) {
            clouds = clearsky;
        } else if (currentCloudsId === 500 || currentCloudsId === 501) {
            clouds = Rain;
        } else if (currentCloudsId === 803) {
            clouds = brokenCloud;
        } else if (currentCloudsId === 804) {
            clouds = overcastCloud;
        } else {
            clouds = fewclouds;
        }
    } else {
        if (searchableCloudsId === 802) {
            clouds = scatteredCloud;
        } else if (searchableCloudsId === 800) {
            clouds = clearsky;
        } else if (searchableCloudsId === 500 || searchableCloudsId === 501) {
            clouds = Rain;
        } else if (searchableCloudsId === 803) {
            clouds = brokenCloud;
        } else if (searchableCloudsId === 804) {
            clouds = overcastCloud;
        } else {
            clouds = fewclouds;
        }
    }

 return (
        <div className="tempDet">
            <div className="weather">
                <img src={clouds} />
                 
                <h4>{weather?.list[0].weather[0].description === undefined ? `${currentData?.list[0].weather[0]?.description}` : `${weather?.list[0].weather[0].description}`}</h4>
                <span>Today</span>
            </div>
            <div className="temp">
                <h1>{(weather?.list[0].main.temp) === undefined ? `${Math.floor(currentData?.list[0].main?.temp)}°` : `${Math.floor(weather?.list[0].main.temp)}°`}</h1>
                <span>{weather?.list[0].main.feels_like === undefined ? `Feels like ${Math.floor(currentData?.list[0].main?.feels_like)}°` : `feels like ${Math.floor(weather?.list[0].main.feels_like)}°`}</span>
            </div>
        </div>
    )
}

export default TempDetails
