import "../WeatherCard/WeatherCard.css";
import { useContext } from "react";
import { weatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section className="weather">
      <div className="weather__container">
        <div className="weather__temp">
          <h1> {weatherTemp + "°" + currentTemperatureUnit}</h1>
        </div>
        <img className="weather__image" alt={type} src={imageSrcUrl}></img>
      </div>
    </section>
  );
};

export default WeatherCard;
