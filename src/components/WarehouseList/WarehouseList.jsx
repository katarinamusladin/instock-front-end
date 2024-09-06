import React, { useState, useEffect } from "react";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import WarehouseHeaderList from "../WarehouseHeaderList/WarehouseHeaderList";
import SearchHeader from "../SearchHeader/SearchHeader";
import WarehouseDeleteModal from "../WarehouseDeleteModal/WarehouseDeleteModal";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const columnsData = [
    ["Warehouse", "Address"],
    ["Contact Name", "Contact Information"],
  ];

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const port = import.meta.env.VITE_PORT;
    const endpoint = import.meta.env.VITE_BASE_ENDPOINT;
    const apiUrl = `${baseUrl}:${port}/${endpoint}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWarehouses(data))
      .catch((error) => console.error("Error fetching warehouses:", error));
  }, []);

  const handleDelete = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setSelectedWarehouse(null);
  };

  return (
    <div className="warehouses">
      <SearchHeader title="Warehouses" />
      <WarehouseHeaderList
        columns={columnsData}
        actionText="Actions"
        iconSrc={Arrows}
      />

      {warehouses.map((warehouse) => (
        <div key={warehouse.id} className="warehouses__item">
          <div className="warehouses__text-box">
            <div className="warehouses__column">
              <div className="warehouses__content warehouses__content--long">
                <h3 className="warehouses__mobile-header">Warehouse</h3>
                <Link
                  to={`/warehouses/${warehouse.id}`}
                  className="warehouses__link"
                >
                  <div className="warehouses__name-wrapper">
                    <p className="warehouses__name">
                      {warehouse.warehouse_name}
                    </p>
                    <img
                      src={arrowRight}
                      alt="Arrow Right"
                      className="warehouses__name--icon"
                    />
                  </div>
                </Link>
              </div>
              <div className="warehouses__content warehouses__content--long">
                <h3 className="warehouses__mobile-header">Address</h3>
                <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
              </div>
            </div>
            <div className="warehouses__column">
              <div className="warehouses__content warehouses__content--long">
                <h3 className="warehouses__mobile-header">Contact Name</h3>
                <p>{warehouse.contact_name}</p>
              </div>
              <div className="warehouses__content warehouses__content--long">
                <h3 className="warehouses__mobile-header">
                  Contact Information
                </h3>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>
          </div>
          <div className="warehouses__action">
            <h3 className="warehouses__mobile-header active">ACTIONS</h3>
            <button
              className="warehouses__icon-button"
              onClick={() => handleDelete(warehouse)}
            >
              <img src={deleteIcon} alt="Delete icon" />
            </button>
            <button className="warehouses__icon-button">
              <img src={editIcon} alt="Edit icon" />
            </button>
          </div>
        </div>
      ))}
      {showDeleteModal && (
        <WarehouseDeleteModal
          onClose={handleCloseModal}
          warehouseName={selectedWarehouse?.warehouse_name}
        />
      )}
    </div>
  );
}

export default WarehouseList;
