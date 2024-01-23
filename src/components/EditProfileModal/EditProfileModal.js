import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ handleCloseEditProfileModal }) => {
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={"Save changes"}
      onClose={handleCloseEditProfileModal}
    >
      <label className="modal__label">Name*</label>
      <input className="modal__input"></input>
      <label className="modal__label">Avatar*</label>
      <input className="modal__input"></input>
    </ModalWithForm>
  );
};

export default EditProfileModal;
