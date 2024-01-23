import "../Header/Header.css";
import headerLogo from "../../images/wtwr.svg";
import headerAvatar from "../../images/Avatar WTWR.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal, handleLoginModal, handleRegisterModal }) => {
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
        <button className="header__buttons" onClick={handleRegisterModal}>
          Sign Up
        </button>
        <button className="header__buttons" onClick={handleLoginModal}>
          Login
        </button>
        {/* <button onClick={onCreateModal} className="header__button">
          + Add Clothes
        </button>
        <Link className="header__name_link" to="/Profile">
          <p className="header__name">Terrence Tegegne</p>
        </Link>
        <button className="header__menu"></button>
        <Link className="header__link" to="/Profile">
          <img
            className="header__avatar"
            alt="Users Avatar"
            src={headerAvatar}
          ></img>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
