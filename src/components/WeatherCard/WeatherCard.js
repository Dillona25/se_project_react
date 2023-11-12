import { useContext } from "react";
import "../WeatherCard/WeatherCard.css";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTempUnitContext";

import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div className="weather__container">
        <div className="weather__temp">
          {weatherTemp && weatherTemp.temp[currentTemperatureUnit]}
        </div>
        <img
          className="weather__image"
          alt="cloud image"
          src={imageSrcUrl}
        ></img>
      </div>
    </section>
  );
};

export default WeatherCard;
