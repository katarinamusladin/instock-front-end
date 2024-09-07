import "./DeleteModal.scss";
import Exit from "../../assets/images/icons/close-24px.svg";

function DeleteModal({ onClose, title, message, onConfirm }) {
  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal__overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className="modal__container">
        <img
          src={Exit}
          alt="Exit Icon"
          className="modal__icon"
          onClick={handleClose}
        />
        <h1 className="modal__heading">{title}</h1>
        <p className="modal__text">{message}</p>
        <div className="modal__button-container">
          <button
            className="modal__button modal__button--cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="modal__button modal__button--delete"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
