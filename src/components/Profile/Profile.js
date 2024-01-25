import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import ProfileCards from "../ProfileCards/ProfileCards";
import "../Profile/Profile.css";

const Profile = ({
  onSelectCard,
  openModal,
  cards,
  handleEditProfileModal,
  handleLogout,
}) => {
  return (
    <div className="profile">
      <ProfileSideBar
        handleEditProfileModal={handleEditProfileModal}
        handleLogout={handleLogout}
      />
      <ProfileCards
        cards={cards}
        openModal={openModal}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
