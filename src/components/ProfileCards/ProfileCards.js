import "../ProfileCards/ProfileCards.css";
import { useContext } from "react";
import ItemCard from "../ItemCards/ItemCards";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { defaultClothingItems } from "../../utils/constants";

const ProfileCards = ({ onSelectCard }) => {
  const filteredCards = defaultClothingItems;
  console.log(filteredCards);

  return (
    <div className="profile__cards">
      <div className="profile__cards_text">
        <h1 className="profile__cards_title">Your items</h1>
        <button className="profile__cards_new">+ Add new</button>
      </div>
      <div className="profile__cards_content">
        {filteredCards.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCards;
