import "./ModalWithForm.css";

const AddNewClothesModal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close"></button>
        <h1 className="modal__title">New Garmet</h1>
        <form className="modal__form"></form>
      </div>
    </div>
  );
};
