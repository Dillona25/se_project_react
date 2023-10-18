import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../WeatherCard/WeatherCard.css";
import "../ItemCards/ItemCards.css";
import "../Footer/Footer.css";
import headerLogo from "../../images/wtwr.svg";
import headerAvatar from "../../images/Avatar WTWR.svg";
import cloud from "../../images/Cloud.svg";
import sun from "../../images/Sun.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__info">
          <img src={headerLogo} alt="Logo" className="header__logo"></img>
          <p className="header__info_date">{currentDate}, New York</p>
        </div>
        <div className="header__info_user">
          <button className="header__button">+ Add Clothes</button>
          <p className="header__name">Terrence Tegegne</p>
          <img
            className="header__avatar"
            alt="Users Avatar"
            src={headerAvatar}
          ></img>
        </div>
      </header>

      <main className="main">
        <section className="weather">
          <div className="weather__container">
            <h1 className="weather__temp">75°F</h1>
            <img className="weather__cloud" src={cloud} alt="cloud image"></img>
            <img className="weather__sun" src={sun} alt="sun image"></img>
          </div>
        </section>

        <section className="cards">
          <p className="cards__description">
            Today is 75° F / You may want to wear:
          </p>
          <div className="cards__container">
            <ul className="cards__list">
              <li>
                <div className="cards__item_container">
                  <div className="cards__title_frame">
                    <h1 className="cards__title">Shirt</h1>
                  </div>
                  <img className="cards__image"></img>
                </div>
              </li>
              <li>
                <div className="cards__item_container">
                  <div className="cards__title_frame">
                    <h1 className="cards__title">Shorts</h1>
                  </div>
                  <img className="cards__image"></img>
                </div>
              </li>
              <li>
                <div className="cards__item_container">
                  <div className="cards__title_frame">
                    <h1 className="cards__title">Cap</h1>
                  </div>
                  <img className="cards__image"></img>
                </div>
              </li>
              <li>
                <div className="cards__item_container">
                  <div className="cards__title_frame">
                    <h1 className="cards__title">Sneakers</h1>
                  </div>
                  <img className="cards__image"></img>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__tag">Developed by Dillon Arnold</p>
        <p className="footer__tag">2023</p>
      </footer>
    </div>
  );
}

export default App;
