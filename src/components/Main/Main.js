import { defaultClothingItems } from "../../utils/constants";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCards/ItemCards";
import { useMemo } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTempUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp?.temp?.main >= 86) {
      return "hot";
    } else if (weatherTemp?.temp?.main >= 66 && weatherTemp?.temp?.main <= 85) {
      return "warm";
    } else if (weatherTemp?.temp?.main <= 65) {
      return "cold";
    }
  }, [weatherTemp?.temp?.main]);

  console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={weatherTemp} />
      <section className="cards">
        <p className="cards__temp">
          Today is {weatherTemp && weatherTemp.temp[currentTemperatureUnit]} /
          You may want to wear:
        </p>
        <div className="cards__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
        <button type="submit" className="cards__random">
          Randomize
        </button>
      </section>
    </main>
  );
}

export default Main;
