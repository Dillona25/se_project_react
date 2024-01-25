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
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeather } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import {
  HashRouter,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { getClothingItem, addNewItem, deleteItem } from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { registration } from "../../utils/auth";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [loginModal, setLoginModal] = useState("");
  const [signinModal, setSigninModal] = useState("");
  const [editProfileModal, setEditProfileModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemerpatureUnit] = useState("F");
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  const handleEditProfileModal = () => {
    setEditProfileModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCloseRegisterModal = () => {
    setSigninModal("");
  };

  const handleCloseEditProfileModal = () => {
    setEditProfileModal("");
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
      .catch((err) => console.error(err));
  };

  function handleLogin({ email, password }) {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data.data);
              setIsLoggedIn(true);
            })
            .catch((err) => {
              console.error(err);
            });
        }
        handleCloseLoginModal();
      })
      .catch((err) => {
        console.error("Login failed", err);
      });
  }

  function handleRegistration({ email, password, name, avatar }) {
    auth
      .registration(email, password, name, avatar)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
            })
            .catch((err) => {
              console.error(err);
            });
        }
        handleCloseRegisterModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log({ jwt });
    if ({ jwt }) {
      localStorage.setItem("jwt", jwt);
      auth
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser({ currentUser: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const history = useHistory("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  return (
    <HashRouter>
      <div className="App">
        <CurrentUserContext.Provider value={{ currentUser }}>
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              onCreateModal={handleCreateModal}
              handleLoginModal={handleLoginModal}
              handleRegisterModal={handleRegisterModal}
              onSelectCard={handleSelectedCard}
              isLoggedIn={isLoggedIn}
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
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={() => (
                <Profile
                  onSelectCard={handleSelectedCard}
                  openModal={handleCreateModal}
                  handleEditProfileModal={handleEditProfileModal}
                  handleLogout={handleLogout}
                  cards={cards}
                />
              )}
            ></ProtectedRoute>
            <Footer />
            {editProfileModal === "create" && (
              <EditProfileModal
                handleCloseEditProfileModal={handleCloseEditProfileModal}
              />
            )}
            {signinModal === "create" && (
              <RegisterModal
                isOpen={activeModal === "create"}
                handleCloseRegisterModal={handleCloseRegisterModal}
                handleLoginModal={handleLoginModal}
                handleCreateModal={handleCreateModal}
                onSubmit={handleRegistration}
              />
            )}
            {loginModal === "create" && (
              <LoginModal
                isOpen={activeModal === "create"}
                handleCloseLoginModal={handleCloseLoginModal}
                handleRegisterModal={handleRegisterModal}
                onSubmit={handleLogin}
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
        </CurrentUserContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
