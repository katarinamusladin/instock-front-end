function WarehouseDeleteModal({ onClose, warehouseName, onDeleteConfirm }) {
  return (
    <DeleteModal
      onClose={onClose}
      title={`Delete ${warehouseName} warehouse?`}
      message={`Please confirm that you’d like to delete this warehouse from the list of warehouses. You won’t be able to undo this action.`}
      onConfirm={onDeleteConfirm}
    />
  );
}

export default WarehouseDeleteModal;
