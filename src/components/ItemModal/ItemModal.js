import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({
  selectedCard,
  onSelectCard,
  onClose,
  handleDeleteCard,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  return (
    <div className={`modal modal__type_preview`}>
      <div className="modal__container_preview">
        <button className="modal__close" onClick={onClose}></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          onClick={onSelectCard}
          alt={selectedCard.name}
        ></img>
        <div>
          <div className="modal__title_wrapper">
            <h2 className="modal__title_preview">{selectedCard.name}</h2>
            <button
              onClick={handleDeleteCard}
              className={itemDeleteButtonClassName}
            >
              Delete Card
            </button>
          </div>
          <p className="modal__description_preview">
            Weather: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
