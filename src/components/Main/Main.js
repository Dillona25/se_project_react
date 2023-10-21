import { defaultClothingItems } from "../App/App";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCards/ItemCards";

function Main({ weatherTemp, handleSelectCard }) {
  return (
    <main className="main" onSelectCard={handleSelectCard}>
      <WeatherCard day={true} type="fog" weatherTemp={weatherTemp} />
      <section className="cards">
        <p className="cards__temp">
          Today is {weatherTemp} You may want to wear:
        </p>
        <div className="cards__items">
          {defaultClothingItems.map((items) => {
            return <ItemCard items={items} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
