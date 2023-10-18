import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../ItemCards/ItemCards.css";
import "../Footer/Footer.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import CardSection from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy" />
        <CardSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
