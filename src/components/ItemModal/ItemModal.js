import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({
  selectedCard,
  onSelectCard,
  handleCloseModal,
  handleConfirmModal,
}) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser?._id;
  const deleteButtonClassName = `modal__delete ${
    isOwn ? "modal__delete-visible" : "modal__delete-hidden"
  }`;

  return (
    <div className={`modal modal__type_preview`}>
      <div className="modal__container_preview">
        <button className="modal__close" onClick={handleCloseModal}></button>
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
              onClick={handleConfirmModal}
              className={deleteButtonClassName}
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
