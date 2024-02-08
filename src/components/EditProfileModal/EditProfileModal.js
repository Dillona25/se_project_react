import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const EditProfileModal = ({ handleCloseModal, isOpen, onSubmit }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEditName = (e) => {
    setName(e.target.value);
  };

  const handleEditAvatar = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setName(currentUser.name ?? "");
    setAvatar(currentUser.avatar ?? "");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      title={"Change profile data"}
      button={
        <button className="modal__button" type="submit">
          Save
        </button>
      }
      buttonText={"Save changes"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name*
      </label>
      <input
        className="modal__input"
        placeholder="New name"
        type="name"
        name="name"
        id="name"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleEditName}
      ></input>
      <label htmlFor="avatar" className="modal__label">
        Avatar*
      </label>
      <input
        className="modal__input"
        placeholder="New Avatar URL"
        type="url"
        name="avatar"
        id="avatar"
        value={avatar}
        onChange={handleEditAvatar}
      ></input>
    </ModalWithForm>
  );
};

export default EditProfileModal;
