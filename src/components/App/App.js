import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../ItemCards/ItemCards.css";
import "../Footer/Footer.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

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

function App() {
  //* Temporary until we have the API connected
  const weatherTemp = "48°F";

  //* useState hook used to set the state of our modal
  const [activeModal, setActiveModal] = "";

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  return (
    <div className="App">
      <Header onCreateModal={handleCreateModal} />
      <main className="main">
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
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garmet">
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
    </div>
  );
}

export default App;
