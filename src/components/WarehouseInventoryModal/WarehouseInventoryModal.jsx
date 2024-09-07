import DeleteModal from "../DeleteModal/DeleteModal";

function WarehouseInventoryModal({ onClose, itemName, onDelete }) {
  
  return (
    <DeleteModal
    onClose={onClose}
    title={`Delete ${itemName}?`}
    message="Please confirm that you’d like to delete this inventory item from the list of warehouses. You won’t be able to undo this action."
    onConfirm={onDelete}
  />
  );
}

export default WarehouseInventoryModal;
