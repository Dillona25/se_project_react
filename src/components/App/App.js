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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  console.log(temp);

  return (
    <div className="App">
      <Header
        onCreateModal={handleCreateModal}
        onSelectCard={handleSelectedCard}
      />
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
          <label input className="modal__label">
            Image
          </label>
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
              <input type="radio" id="hot" value="hot" name="radio"></input>
              <label id="modal__radio" className="modal__label">
                Hot
              </label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" name="radio"></input>
              <label id="modal__radio" className="modal__label">
                Warm
              </label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" name="radio"></input>
              <label id="modal__radio" className="modal__label">
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
    </div>
  );
}

export default App;
