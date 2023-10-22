const ItemModal = ({ selectedCard, onSelectCard, onClose }) => {
  return (
    <div className={`modal modal__type_preview`}>
      <div className="modal__container_preview">
        <button className="modal__close" onClick={onClose}></button>
        <img
          className="modal__image"
          src={selectedCard.link}
          onClick={onSelectCard}
          alt={selectedCard.name}
        ></img>
        <div>
          <h2 className="modal__title_preview">{selectedCard.name}</h2>
          <p className="modal__description_preview">
            Weather: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
