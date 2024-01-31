const ConfirmModal = ({ handleCloseConfirmModal, handleDeleteCard }) => {
  return (
    <div className="modal">
      <div className="modal__container-confirm">
        <button
          onClick={handleCloseConfirmModal}
          className="modal__close"
        ></button>
        <form className="modal__form-confirm">
          <span className="modal__confirm-text">
            Are you sure you want to delete this item? This action is
            irreversible.
          </span>
          <button onClick={handleDeleteCard} className="modal__button-delete">
            Yes, delete item
          </button>
          <button
            onClick={handleCloseConfirmModal}
            className="modal__button-cancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmModal;
