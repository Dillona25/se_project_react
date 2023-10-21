import "../WeatherCard/WeatherCard.css";

export const weatherOptions = [
  {
    url: require("../../images/Day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/Day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/Day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/Day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/Day/Fog.svg").default,
    day: true,
    type: "fog",
  },

  //* Night weathers

  {
    url: require("../../images/Night/SunnyNight.svg").default,
    day: false,
    type: "Sunny night",
  },
  {
    url: require("../../images/Night/CloudyNight.svg").default,
    day: false,
    type: "Cloudy night",
  },
  {
    url: require("../../images/Night/RainyNight.svg").default,
    day: false,
    type: "Rainy night",
  },
  {
    url: require("../../images/Night/StormyNight.svg").default,
    day: false,
    type: "Stormy night",
  },
  {
    url: require("../../images/Night/SnowyNight.svg").default,
    day: false,
    type: "Snowy night",
  },
  {
    url: require("../../images/Night/FoggyNight.svg").default,
    day: false,
    type: "Foggy-night",
  },
];
//! Night cards arent working

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
