import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileCards from "../ProfileCards/ProfileCards";
import "../Profile/Profile.css";

const Profile = ({ onSelectCard }) => {
  return (
    <div className="profile">
      <ProfileSideBar />
      <ProfileCards onSelectCard={onSelectCard} />
    </div>
  );
};

export default Profile;
