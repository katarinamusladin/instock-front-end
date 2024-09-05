import React, { useState, useEffect } from "react";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import WarehouseHeaderList from "../WarehouseHeaderList/WarehouseHeaderList";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([]);

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

  return (
    <div className="warehouses">
      <div className="warehouses__header">
        <h1 className="warehouses__header-title">Warehouses</h1>
        <div className="warehouses__header-container">
          <form className="warehouses__header-form">
            <input
              type="search"
              name="search"
              className="warehouses__header-form-search"
              placeholder="Search..."
            />
            <button className="warehouses__header-form-button">
              + Add New Warehouse
            </button>
          </form>
        </div>
      </div>

      <WarehouseHeaderList />

      {/* Warehouse List Section  */}
      {warehouses.map((warehouse) => (
        <div key={warehouse.id} className="warehouses__item">
          <div className="warehouses__text-box">
            <div className="warehouses__column">
              <div className="warehouses__content warehouses__content--short">
                <h3 className="warehouses__mobile-header">Warehouse</h3>
                <div className="warehouses__name-wrapper">
                  <p className="warehouses__name">{warehouse.warehouse_name}</p>
                  <img
                    src={arrowRight}
                    alt="Arrow Right"
                    className="warehouses__name--icon"
                  />
                </div>
              </div>
              <div className="warehouses__content warehouses__content--long">
                <h3 className="warehouses__mobile-header">Address</h3>
                <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
              </div>
            </div>
            <div className="warehouses__column">
              <div className="warehouses__content warehouses__content--short">
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
            <img
              src={deleteIcon}
              alt="delete icon"
              className="warehouses__icon"
            />
            <img src={editIcon} alt="edit icon" className="warehouses__icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WarehouseList;
