import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmModal = ({ handleCloseModal, handleDeleteCard }) => {
  return (
    <ModalWithForm
      onSubmit={handleDeleteCard}
      onClose={handleCloseModal}
      className="modal__form-confirm"
    >
      <span className="modal__confirm-text">
        Are you sure you want to delete this item? This action is irreversible.
      </span>
      <button type="submit" className="modal__button-delete">
        Yes, delete item
      </button>
      <button
        type="button"
        onClick={handleCloseModal}
        className="modal__button-cancel"
      >
        Cancel
      </button>
    </ModalWithForm>
  );
};

export default ConfirmModal;
