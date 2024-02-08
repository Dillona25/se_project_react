import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ handleCloseModal, handleRegisterModal, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <ModalWithForm
      title={"Log in"}
      button={
        <button className="modal__button" type="submit">
          Log in
        </button>
      }
      buttonText={"Login"}
      buttonTextAlt={"or Register"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        className="modal__input"
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        id="email"
        minLength="1"
        maxLength="30"
        onChange={handleEmailChange}
      ></input>
      <label htmlFor="password" className="modal__label">
        Password
      </label>
      <input
        className="modal__input"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        id="password"
        minLength="8"
        maxLength="30"
        onChange={handlePasswordChange}
      ></input>
      <button
        className="modal__button-alt"
        type="button"
        onClick={handleRegisterModal}
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
