import "../ClothesSection/ClothesSection.css";
import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  openModal,
  cards,
  isLoggedIn,
  onCardLike,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const filteredCards = cards.filter((item) => {
    return item.owner === currentUser?._id;
  });

  return (
    <div className="profile__cards">
      <div className="profile__cards_text">
        <h1 className="profile__cards_title">Your items</h1>
        <button onClick={openModal} className="profile__cards_new">
          + Add new
        </button>
      </div>
      <div className="profile__cards-content">
        {filteredCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
