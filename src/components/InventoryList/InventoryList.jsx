import { useEffect, useState } from "react";
import axios from "axios"; 
import SearchHeader from "../SearchHeader/SearchHeader";
import WarehouseHeaderList from "../WarehouseHeaderList/WarehouseHeaderList";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import './InventoryList.scss';
function InventoryList() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [warehouses, setWarehouses] = useState({});
  const [loading, setLoading] = useState(true);

  const columnsData = [
    ["Inventory Item", "Category"],
    ["Status", "QTY", "Warehouse"],
  ];

  useEffect(() => {
    const fetchInventoryItems = async () => {
      try {
        const responseInv = await axios.get("http://localhost:8080/api/inventories");
        const responseWar = await axios.get("http://localhost:8080/api/warehouses");

        const warehouseMap = responseWar.data.reduce((acc, warehouse) => {
          acc[warehouse.id] = warehouse.warehouse_name;
          return acc;
        }, {});

        setInventoryItems(responseInv.data); 
        setWarehouses(warehouseMap); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
        setLoading(false);
      }
    };

    fetchInventoryItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="warehouses">
      <SearchHeader title="Inventory" />
      <WarehouseHeaderList
        columns={columnsData}
        actionText="Actions"
        iconSrc={Arrows}
      />

      {inventoryItems.map((item) => {
        
        const statusClass = item.status === "In Stock" ? "status-in-stock" : "status-out-of-stock";
        
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
                <div className="warehouses__content warehouses__content--short">
                  <h3 className="warehouses__mobile-header">Status</h3>
                  <p className={statusClass}>{item.status}</p> 
                </div>
                <div className="warehouses__content warehouses__content--short">
                  <h3 className="warehouses__mobile-header">QTY</h3>
                  <p>{item.quantity}</p>
                </div>
                <div className="warehouses__content warehouses__content--short">
                  <h3 className="warehouses__mobile-header">Warehouse</h3>
                  <p>{warehouses[item.warehouse_id]}</p> 
                </div>
              </div>
            </div>
            <div className="warehouses__action">
              <h3 className="warehouses__mobile-header active">ACTIONS</h3>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="warehouses__icon"
              />
              <img
                src={editIcon}
                alt="edit icon"
                className="warehouses__icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InventoryList;