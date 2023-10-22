import "../WeatherCard/WeatherCard.css";

import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc.url || "";

  return (
    <section className="weather">
      <div className="weather__container">
        <h1 className="weather__temp">{weatherTemp}°F</h1>
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
