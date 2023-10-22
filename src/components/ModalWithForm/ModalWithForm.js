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
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
