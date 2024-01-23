import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  buttonTextAlt,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
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
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons">
            <button className="modal__button" type="submit">
              {buttonText}
            </button>
            <button className="modal__button-alt" type="button">
              {buttonTextAlt}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
