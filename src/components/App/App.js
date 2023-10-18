import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../WeatherCard/WeatherCard.css";
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
          <button className="header__button">+ Add New Clothes</button>
          <p className="header__name">Terrence Tegegne</p>
          <img
            className="header__avatar"
            alt="Users Avatar"
            src={headerAvatar}
          ></img>
        </div>
      </header>

      <main>
        <section className="weather">
          <div className="weather__container">
            <h1 className="weather__temp">75 F</h1>
            <img className="weather__cloud" src={cloud} alt="cloud image"></img>
            <img className="weather__sun" src={sun} alt="sun image"></img>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
