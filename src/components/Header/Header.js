import "../Header/Header.css";
import headerLogo from "../../images/wtwr.svg";
import headerAvatar from "../../images/Avatar WTWR.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__info">
        <img src={headerLogo} alt="Logo" className="header__logo"></img>
        <p className="header__info_date">{currentDate}, Portland, Oregon</p>
      </div>
      <div className="header__info_user">
        <button onClick={onCreateModal} className="header__button">
          + Add Clothes
        </button>
        <p className="header__name">Terrence Tegegne</p>
        <img
          className="header__avatar"
          alt="Users Avatar"
          src={headerAvatar}
        ></img>
      </div>
    </header>
  );
};

export default Header;
