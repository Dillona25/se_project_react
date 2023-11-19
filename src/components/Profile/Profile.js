import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileCards from "../ProfileCards/ProfileCards";
import "../Profile/Profile.css";

const Profile = ({ onSelectCard, openModal }) => {
  return (
    <div className="profile">
      <ProfileSideBar />
      <ProfileCards openModal={openModal} onSelectCard={onSelectCard} />
    </div>
  );
};

export default Profile;
