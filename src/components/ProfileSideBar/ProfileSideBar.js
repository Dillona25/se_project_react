import avatar from "../../images/Avatar WTWR.svg";
import "../ProfileSideBar/ProfileSideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ProfileSideBar = ({ handleEditProfileModal, handleLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="profile__sidebar-wrapper">
      <div className="profile__sidebar">
        <img src={currentUser?.avatar} className="profile__image"></img>
        <h1 className="profile__name">{currentUser?.name}</h1>
      </div>
      <button
        className="profile__sidebar-edit"
        onClick={handleEditProfileModal}
      >
        Edit profile data
      </button>
      <button onClick={handleLogout} className="profile__sidebar-logout">
        Logout
      </button>
    </div>
  );
};

export default ProfileSideBar;
