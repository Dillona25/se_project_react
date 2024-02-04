import "../Header/Header.css";
import headerLogo from "../../images/wtwr.svg";
import headerAvatar from "../../images/Avatar WTWR.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({
  handleCreateModal,
  handleLoginModal,
  handleRegisterModal,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__info">
        <Link to="/" className="header__link">
          <img src={headerLogo} alt="Logo" className="header__logo"></img>
        </Link>
        <p className="header__info_date">{currentDate}, Portland, Oregon</p>
      </div>
      <div className="header__info_user">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button onClick={handleCreateModal} className="header__button">
              + Add Clothes
            </button>
            <Link className="header__name_link" to="/profile">
              <p className="header__name">{currentUser?.name}</p>
            </Link>
            <button className="header__menu"></button>
            <Link className="header__link" to="/profile">
              <img
                className="header__avatar"
                alt="Users Avatar"
                src={currentUser?.avatar}
              ></img>
            </Link>
          </>
        ) : (
          <>
            <button className="header__buttons" onClick={handleRegisterModal}>
              Sign Up
            </button>
            <button className="header__buttons" onClick={handleLoginModal}>
              Login
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
