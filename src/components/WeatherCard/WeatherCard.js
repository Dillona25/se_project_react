import "../WeatherCard/WeatherCard.css";
import foggyNight from "../../images/Night/Foggy Night.png";

const weatherOptions = [
  { url: "./images/Day/Sunny.png", day: true, type: "sunny" },
  { url: "./images/Day/Cloudy.png", day: true, type: "cloudy" },
  { url: "./images/Day/Fog.png", day: true, type: "fog" },
  { url: "./images/Day/Rainy.png", day: true, type: "rain" },
  { url: "./images/Day/Snow.png", day: true, type: "snow" },
  { url: "./images/Day/Storm.png", day: true, type: "storm" },
  { url: "./images/Night/Cloudy Night.png", day: false, type: "cloudy night" },
  { url: "./images/Night/Foggy Night.png", day: false, type: "foggy night" },
  { url: "./images/day/Rainy Night.png", day: false, type: "rainy night" },
  { url: "./images/day/Snowy Night.png", day: false, type: "snowy night" },
  { url: "./images/day/Stormy Night.png", day: false, type: "storm night" },
  { url: "./images/day/Sunny Night.png", day: false, type: "sunny night" },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather">
      <div className="weather__container">
        <h1 className="weather__temp">75°F</h1>
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
