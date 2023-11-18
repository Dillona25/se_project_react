import avatar from "../../images/Avatar WTWR.svg";
import "../ProfileSideBar/ProfileSideBar.css";

const ProfileSideBar = () => {
  return (
    <div className="profile__sidebar">
      <img src={avatar} className="profile__image"></img>
      <h1 className="profile__name">Terrence Tegegne</h1>
    </div>
  );
};

export default ProfileSideBar;
