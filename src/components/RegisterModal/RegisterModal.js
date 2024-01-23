import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseRegisterModal, handleLoginModal }) => {
  return (
    <ModalWithForm
      title={"Sign Up"}
      onClose={handleCloseRegisterModal}
      buttonText={"Next"}
      buttonTextAlt={"or Log In"}
    >
      <label className="modal__label">Email*</label>
      <input
        className="modal__input"
        placeholder="Email"
        type="email"
        required
        name="email"
        id="email"
        minLength="1"
        maxLength="30"
      ></input>
      <label className="modal__label">Password*</label>
      <input
        className="modal__input"
        placeholder="Password"
        type="password"
        required
        name="password"
        id="password"
        minLength="8"
        maxLength="30"
      ></input>
      <label className="modal__label">Name*</label>
      <input
        className="modal__input"
        placeholder="Name"
        type="name"
        required
        name="name"
        id="name"
        minLength="2"
        maxLength="30"
      ></input>
      <label className="modal__label">Avatar URL*</label>
      <input
        className="modal__input"
        placeholder="Avatar URL"
        type="url"
        required
        name="avatar"
        id="avatar"
      ></input>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleLoginModal}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
