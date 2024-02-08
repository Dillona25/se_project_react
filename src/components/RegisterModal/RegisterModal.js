import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({
  handleCloseModal,
  handleLoginModal,
  onSubmit,
  isOpen,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title={"Sign up"}
      button={
        <button className="modal__button" type="submit">
          Sign up
        </button>
      }
      onClose={handleCloseModal}
      buttonText={"Next"}
      buttonTextAlt={"or Log In"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*
      </label>
      <input
        id="email"
        className="modal__input"
        placeholder="Email"
        type="email"
        required
        name="email"
        minLength="1"
        maxLength="30"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <label htmlFor="password" className="modal__label">
        Password*
      </label>
      <input
        id="password"
        className="modal__input"
        placeholder="Password"
        type="password"
        required
        name="password"
        minLength="8"
        maxLength="30"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <label htmlFor="name" className="modal__label">
        Name*
      </label>
      <input
        className="modal__input"
        placeholder="Name"
        type="name"
        required
        name="name"
        id="name"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      ></input>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL*
      </label>
      <input
        className="modal__input"
        placeholder="Avatar URL"
        type="url"
        required
        name="avatar"
        id="avatar"
        value={avatar}
        onChange={handleAvatarChange}
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
