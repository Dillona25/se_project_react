import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  handleCloseRegisterModal,
  handleLoginModal,
  handleSignUp,
}) => {
  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values);
  };

  return (
    <ModalWithForm
      title={"Sign Up"}
      onClose={handleCloseRegisterModal}
      buttonText={"Next"}
      buttonTextAlt={"or Log In"}
      handleSubmit={handleSubmit}
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
        value={values.email}
        onChange={handleInputChange}
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
        value={values.password}
        onChange={handleInputChange}
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
        value={values.name}
        onChange={handleInputChange}
      ></input>
      <label className="modal__label">Avatar URL*</label>
      <input
        className="modal__input"
        placeholder="Avatar URL"
        type="url"
        required
        name="avatar"
        id="avatar"
        value={values.avatar}
        onChange={handleInputChange}
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
