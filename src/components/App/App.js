import logo from "../../logo.svg";
import "./App.css";
import "../Header/Header.css";
import "../ItemCard/ItemCard.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeather } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { HashRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import { getClothingItem, addNewItem, deleteItem } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loginModal, setLoginModal] = useState("");
  const [signinModal, setSigninModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemerpatureUnit] = useState("F");
  const [cards, setCards] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleRegisterModal = () => {
    setSigninModal("create");
    handleCloseLoginModal();
  };

  const handleLoginModal = () => {
    setLoginModal("create");
    handleCloseRegisterModal();
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCloseRegisterModal = () => {
    setSigninModal("");
  };

  const handleCloseLoginModal = () => {
    setLoginModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeather(data);
        setTemp(temperature);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getClothingItem()
      .then((data) => {
        const items = data.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        setCards(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") {
      setCurrentTemerpatureUnit("F");
    } else {
      setCurrentTemerpatureUnit("C");
    }
  };

  const onAddItem = ({ name, imageUrl, weather }) => {
    addNewItem({ name, imageUrl, weather })
      .then((res) => {
        setCards([res, ...cards]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCard = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== selectedCard._id));
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  return (
    <HashRouter>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            handleLoginModal={handleLoginModal}
            handleRegisterModal={handleRegisterModal}
            onSelectCard={handleSelectedCard}
          >
            <ToggleSwitch />
          </Header>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              cards={cards}
              onSelectCard={handleSelectedCard}
            />
          </Route>
          <Route path="/Profile">
            <Profile
              onSelectCard={handleSelectedCard}
              openModal={handleCreateModal}
              cards={cards}
            />
          </Route>
          <Footer />

          {signinModal === "create" && (
            <RegisterModal
              isOpen={activeModal === "create"}
              handleCloseRegisterModal={handleCloseRegisterModal}
              handleLoginModal={handleLoginModal}
              handleCreateModal={handleCreateModal}
            />
          )}

          {loginModal === "create" && (
            <LoginModal
              isOpen={activeModal === "create"}
              handleCloseLoginModal={handleCloseLoginModal}
              handleRegisterModal={handleRegisterModal}
            />
          )}

          {activeModal === "create" && (
            <AddItemModal
              title="New Garmet"
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
            />
          )}
          <div>
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                handleDeleteCard={handleDeleteCard}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
