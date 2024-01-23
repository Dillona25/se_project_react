import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseLoginModal, handleRegisterModal }) => {
  return (
    <ModalWithForm
      title="log in"
      buttonText={"Login"}
      buttonTextAlt={"or Register"}
      onClose={handleCloseLoginModal}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input"
        placeholder="Email"
        type="email"
        name="email"
        id="email"
        minLength="1"
        maxLength="30"
      ></input>
      <label className="modal__label">Password</label>
      <input
        className="modal__input"
        placeholder="Password"
        type="password"
        name="password"
        id="password"
        minLength="8"
        maxLength="30"
      ></input>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleRegisterModal}
      >
        or Sign In
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
