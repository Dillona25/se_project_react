import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      button={
        <button className="modal__button" type="submit">
          New garmet
        </button>
      }
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={"Add Garmet"}
    >
      <label htmlFor="name-input" className="modal__label">
        Name
      </label>
      <input
        id="name-input"
        className="modal__input"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        minLength={1}
        maxLength={30}
        required
        placeholder="Name"
      ></input>
      <label htmlFor="image-input" className="modal__label">
        Image
      </label>
      <input
        id="image-input"
        className="modal__input"
        type="link"
        name="image link"
        value={imageUrl}
        onChange={handleImageChange}
        minLength={1}
        required
        placeholder="Image URL"
      ></input>
      <h3 className="modal__label">Select the weather type:</h3>
      <div>
        <div>
          <label id="modal__radio" className="modal__label">
            <input
              type="radio"
              id="hot"
              value="hot"
              name="radio"
              onChange={handleWeatherChange}
            ></input>
            Hot
          </label>
        </div>
        <div>
          <label id="modal__radio" className="modal__label">
            <input
              type="radio"
              id="warm"
              value="warm"
              name="radio"
              onChange={handleWeatherChange}
            ></input>
            Warm
          </label>
        </div>
        <div>
          <label id="modal__radio" className="modal__label">
            <input
              type="radio"
              id="cold"
              value="cold"
              name="radio"
              onChange={handleWeatherChange}
            ></input>
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
