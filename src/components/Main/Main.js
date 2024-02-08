import { useContext } from "react";
import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, cards, isLoggedIn, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];

  const tempInF = currentTemperatureUnit === "F" ? temp : temp * 1.8 + 32;

  const getWeatherType = () => {
    if (tempInF >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = cards.filter((item) => {
    return item.weather?.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <section className="cards">
        <p className="cards__temp">
          Today is {temp + "°" + currentTemperatureUnit} You may want to wear:
        </p>
        <div className="cards__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                isLoggedIn={isLoggedIn}
                onCardLike={onCardLike}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
