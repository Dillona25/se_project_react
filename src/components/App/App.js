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
  const defaultClothingItems = [
    {
      _id: 0,
      name: "Cap",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    },
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 2,
      name: "Jacket",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    },
    {
      _id: 3,
      name: "Sneakers",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      _id: 5,
      name: "Winter coat",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    },
  ];
  //* Temporary until we have the API connected
  const weatherTemp = "48°F";

  //* useState hook used to set the state of our modal
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
      {Main()}
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
