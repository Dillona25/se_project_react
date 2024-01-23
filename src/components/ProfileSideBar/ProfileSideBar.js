import avatar from "../../images/Avatar WTWR.svg";
import "../ProfileSideBar/ProfileSideBar.css";

const ProfileSideBar = ({ handleEditProfileModal }) => {
  return (
    <div className="profile__sidebar-wrapper">
      <div className="profile__sidebar">
        <img src={avatar} className="profile__image"></img>
        <h1 className="profile__name">Terrence Tegegne</h1>
      </div>
      <button
        className="profile__sidebar-edit"
        onClick={handleEditProfileModal}
      >
        Edit profile data
      </button>
      <button className="profile__sidebar-logout">Logout</button>
    </div>
  );
};

export default ProfileSideBar;
