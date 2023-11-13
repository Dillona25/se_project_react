import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../ItemCards/ItemCards.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeather } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemerpatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeather(data);
        console.log(data);
        setTemp(temperature);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  };

  console.log(currentTemperatureUnit);

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          onSelectCard={handleSelectedCard}
        >
          <ToggleSwitch />
        </Header>
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm title="New Garmet" onClose={handleCloseModal}>
            <label className="modal__label">Name</label>
            <input
              className="modal__input"
              type="text"
              name="name"
              minLength={1}
              maxLength={30}
              required
              placeholder="Name"
            ></input>
            <label className="modal__label">Image</label>
            <input
              className="modal__input"
              type="link"
              name="image link"
              minLength={1}
              maxLength={30}
              required
              placeholder="Image URL"
            ></input>
            <label className="modal__label">Select the weather type:</label>
            <div>
              <div>
                <label id="modal__radio" className="modal__label">
                  <input type="radio" id="hot" value="hot" name="radio"></input>
                  Hot
                </label>
              </div>
              <div>
                <label id="modal__radio" className="modal__label">
                  <input
                    type="radio"
                    id="warm"
                    value="warm"
                    name="radio"
                  ></input>
                  Warm
                </label>
              </div>
              <div>
                <label id="modal__radio" className="modal__label">
                  <input
                    type="radio"
                    id="cold"
                    value="cold"
                    name="radio"
                  ></input>
                  Cold
                </label>
              </div>
            </div>
          </ModalWithForm>
        )}
        <div>
          {activeModal === "preview" && (
            <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
