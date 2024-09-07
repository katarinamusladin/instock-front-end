import WarehouseHeaderList from "../WarehouseHeaderList/WarehouseHeaderList";
import React, { useEffect, useState } from "react";
import "./WarehouseInventoryList.scss";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import axios from "axios";
import WarehouseInventoryModal from "../WarehouseInventoryModal/WarehouseInventoryModal";

function WarehouseInventoryList({ warehouseId }) {
  const [inventory, setInventory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    async function fetchWarehouseInventory() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}:${
            import.meta.env.VITE_PORT
          }/api/inventories?warehouseId=${warehouseId}`
        );
        setInventory(response.data);
      } catch (error) {
        console.log("Error fetching warehouse inventory:", error);
      }
    }

    fetchWarehouseInventory();
  }, [warehouseId]);

  if (inventory.length === 0) {
    return <p>No inventory found for this warehouse.</p>;
  }

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const handleDeleteItem = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}:${
          import.meta.env.VITE_PORT
        }/api/inventories/${selectedItem.id}`
      );
      setInventory(inventory.filter((item) => item.id !== selectedItem.id));
      handleCloseModal();
    } catch (error) {
      console.error(`Error deleting item ${selectedItem.id}:`, error);
    }
  };

  const columnsData = [
    ["Inventory Item", "Category"],
    ["Status", "Quantity"],
  ];

  return (
    <div className="warehouses">
      <WarehouseHeaderList
        columns={columnsData}
        actionText="Actions"
        iconSrc={Arrows}
      />

      {inventory.map((item) => {
        const statusClass =
          item.status === "In Stock"
            ? "status-in-stock"
            : "status-out-of-stock";

        return (
          <div key={item.id} className="warehouses__item">
            <div className="warehouses__text-box">
              <div className="warehouses__column">
                <div className="warehouses__content warehouses__content--long">
                  <h3 className="warehouses__mobile-header">Inventory Item</h3>
                  <div className="warehouses__name-wrapper">
                    <p className="warehouses__name">{item.item_name}</p>
                    <img
                      src={arrowRight}
                      alt="Arrow Right"
                      className="warehouses__name--icon"
                    />
                  </div>
                </div>
                <div className="warehouses__content warehouses__content--long">
                  <h3 className="warehouses__mobile-header">Category</h3>
                  <p>{item.category}</p>
                </div>
              </div>
              <div className="warehouses__column">
                <div className="warehouses__content warehouses__content--long">
                  <h3 className="warehouses__mobile-header">Status</h3>
                  <p className={statusClass}>{item.status}</p>
                </div>
                <div className="warehouses__content warehouses__content--long">
                  <h3 className="warehouses__mobile-header">QTY</h3>
                  <p>{item.quantity}</p>
                </div>
              </div>
            </div>
            <div className="warehouses__action">
              <h3 className="warehouses__mobile-header active">ACTIONS</h3>
              <button
                className="warehouses__icon-button"
                onClick={() => handleDeleteClick(item)}
              >
                <img src={deleteIcon} alt="Delete icon" />
              </button>
              <button className="warehouses__icon-button">
                <img src={editIcon} alt="Edit icon" />
              </button>
            </div>
          </div>
        );
      })}

      {modalVisible && (
        <WarehouseInventoryModal
          onClose={handleCloseModal}
          itemName={selectedItem.item_name}
          onDelete={handleDeleteItem}
        />
      )}
    </div>
  );
}
export default WarehouseInventoryList;
