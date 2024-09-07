import "./WarehouseDeleteModal.scss";
import Exit from "../../assets/images/icons/close-24px.svg";
function WarehouseDeleteModal({ onClose, warehouseName, onDeleteConfirm }) {
  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
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
        <h1 className="modal__heading">Delete {warehouseName} warehouse?</h1>
        <p className="modal__text">
          Please confirm that you’d like to delete this warehouse from the list
          of warehouses. You won’t be able to undo this action.
        </p>
        <div className="modal__button-container">
          <button
            className="modal__button modal__button--cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="modal__button modal__button--delete"  onClick={onDeleteConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDeleteModal;
