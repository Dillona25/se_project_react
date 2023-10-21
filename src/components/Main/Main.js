import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCards/ItemCards";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="fog" weatherTemp={weatherTemp} />
      <section className="cards">
        <p className="cards__temp">
          Today is {weatherTemp} You may want to wear:
        </p>
        <div className="cards__items">
          {defaultClothingItems.map((items) => {
            return <ItemCard items={items} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
