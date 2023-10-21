import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add Garmet",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h1 className="modal__title">{title}</h1>
        <form className="modal__form">
          <label className="modal__label">Name</label>
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength={1}
            maxLength={30}
            required
            placeholder="Name"
          ></input>
          <label className="modal__label">Image</label>
          <input
            className="modal__input"
            type="link"
            name="image link"
            minLength={1}
            maxLength={30}
            required
            placeholder="Image URL"
          ></input>
          <label className="modal__label">Select the weather type:</label>
          <div>
            <div>
              <input type="radio" id="hot" value="hot"></input>
              <label id="modal__radio" className="modal__label">
                Hot
              </label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm"></input>
              <label id="modal__radio" className="modal__label">
                Warm
              </label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold"></input>
              <label id="modal__radio" className="modal__label">
                Cold
              </label>
            </div>
          </div>
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
