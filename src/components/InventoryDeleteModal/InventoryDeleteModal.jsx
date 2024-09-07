import DeleteModal from "../DeleteModal/DeleteModal";

function InventoryDeleteModal({ onClose, itemName, onDelete }) {
  return (
    <DeleteModal
      onClose={onClose}
      title={`Delete ${itemName} item?`}
      message={`Please confirm that you’d like to delete this inventory item from the list of inventories. You won’t be able to undo this action.`}
      onConfirm={onDelete}
    />
  );
}

export default InventoryDeleteModal;
