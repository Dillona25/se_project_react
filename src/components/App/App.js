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
import { useState } from "react";

function App() {
  //* useState hook used to set the state of our modal
  const weatherTemp = "48°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />
      <main weatherTemp={weatherTemp} />
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
              <input type="radio" id="hot" value="hot"></input>
              <label id="modal__radio" className="modal__label">
                Hot
              </label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm"></input>
              <label id="modal__radio" className="modal__label">
                Warm
              </label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold"></input>
              <label id="modal__radio" className="modal__label">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      <div>
        {activeModal === "preview" && <ItemModal selectedCard={selectedCard} />}
        ;
      </div>
    </div>
  );
}

export default App;
