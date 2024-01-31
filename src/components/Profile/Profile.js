import ProfileSideBar from "../SideBar/SideBar";
import ProfileCards from "../ProfileCards/ProfileCards";
import "../Profile/Profile.css";

const Profile = ({
  onSelectCard,
  openModal,
  cards,
  handleEditProfileModal,
  handleLogout,
  onCardLike,
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
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
