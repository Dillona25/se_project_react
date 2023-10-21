import "../ItemModal/ItemModal.css";

const ItemModal = ({ selectedCard, onSelectCard }) => {
  return (
    <div className="modal__preview">
      <div className="modal__preview_container">
        <button className="modal__preview_close"></button>
        <img
          className="modal__preview_image"
          src={selectedCard.link}
          onClick={onSelectCard}
        ></img>
        <div>
          <h1 className="modal__preview_title">{selectedCard.name}</h1>
          <p className="modal__preview_type">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
