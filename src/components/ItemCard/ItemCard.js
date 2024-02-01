import React from "react";
import "../ItemCard/ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useContext } from "react";
import likeButton from "../../images/Like button.svg";
import likeButtonActive from "../../images/likeActive.svg";

const ItemCard = ({ item, onSelectCard, loggedIn, onCardLike, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const likeButtonClassName = `cards__like ${
    loggedIn ? "cards__like-hidden" : "cards__like"
  }`;

  const [isLiked, setIsLiked] = useState(
    item.likes.some((like) => like === currentUser?._id)
  );

  function handleLikeClick() {
    const newLikeStatus = !isLiked;
    onCardLike({ id: item._id, isLiked: isLiked, user: currentUser })
      .then(() => {
        setIsLiked(newLikeStatus);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className="cards__container">
      <div className="cards__item_container">
        <div className="cards__item_top-wrapper">
          <div className="cards__title_frame">
            <h2 className="cards__title">{item.name}</h2>
          </div>
          {isLoggedIn ? (
            <button onClick={handleLikeClick} className="cards__like-wrapper">
              <img
                src={isLiked ? likeButton : likeButtonActive}
                alt="like button"
                className={likeButtonClassName}
              ></img>
            </button>
          ) : (
            ""
          )}
        </div>
        <img
          className="cards__image"
          alt={item.name}
          src={item.imageUrl}
          onClick={() => onSelectCard(item)}
        ></img>
      </div>
    </div>
  );
};

export default ItemCard;
