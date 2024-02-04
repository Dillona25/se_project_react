import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "../Profile/Profile.css";

const Profile = ({
  onSelectCard,
  openModal,
  cards,
  handleEditProfileModal,
  handleLogout,
  onCardLike,
  isLoggedIn,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleEditProfileModal={handleEditProfileModal}
        handleLogout={handleLogout}
      />
      <ClothesSection
        cards={cards}
        openModal={openModal}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
