import avatar from "../../images/Avatar WTWR.svg";
import "../ProfileSideBar/ProfileSideBar.css";

const ProfileSideBar = ({ handleEditProfileModal, handleLogout }) => {
  return (
    <div className="profile__sidebar-wrapper">
      <div className="profile__sidebar">
        <img src={avatar} className="profile__image"></img>
        <h1 className="profile__name">Dillon Arnold</h1>
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
