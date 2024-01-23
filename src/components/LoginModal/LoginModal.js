import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = () => {
  return (
    <ModalWithForm
      title="log in"
      buttonText={"Login"}
      buttonTextAlt={"or Register"}
    >
      <label className="modal__label">Email</label>
      <input className="modal__input" placeholder="Email"></input>
      <label className="modal__label">Password</label>
      <input className="modal__input" placeholder="Password"></input>
    </ModalWithForm>
  );
};

export default LoginModal;
