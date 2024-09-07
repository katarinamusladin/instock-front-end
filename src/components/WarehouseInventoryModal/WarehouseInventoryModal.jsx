import "./WarehouseInventoryModal.scss";
import Exit from "../../assets/images/icons/close-24px.svg";
import "../WarehouseDeleteModal/WarehouseDeleteModal.scss";

function WarehouseInventoryModal({ onClose, itemName, onDelete }) {
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
          onClick={onClose}
        />
        <h1 className="modal__heading">Delete {itemName}?</h1>
        <p className="modal__text">
          Please confirm that you’d like to delete this inventory item. You
          won’t be able to undo this action.
        </p>
        <div className="modal__button-container">
          <button
            className="modal__button modal__button--cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="modal__button modal__button--delete"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseInventoryModal;
