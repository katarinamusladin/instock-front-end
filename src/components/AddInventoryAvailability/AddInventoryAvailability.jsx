import React from "react";
import "./AddInventoryAvailability.scss";

export default function AddInventoryAvailability({status, setStatus, handleQuantityChange, setWarehouse, warehouses}) {
  return (
    <>
      <section className="inventory-add__itemAvail">
        <h2 className="inventory-add__itemAvail--header">Item Availability</h2>
        <section className="availability">
          <h3>Status</h3>
          <section className="availability__status">
            <input
              type="radio"
              name="status"
              value="InStock"
              checked={status === "InStock"}
              onChange={(e) => setStatus(e.target.value)}
            ></input>
            <label className="availability__status--in" htmlFor="InStock">
              In stock{" "}
            </label>
            <input
              type="radio"
              name="status"
              value="OutStock"
              checked={status === "OutStock"}
              onChange={(e) => setStatus(e.target.value)}
            ></input>
            <label className="availability__status--out" htmlFor="OutStock">
              Out of stock{" "}
            </label>
          </section>
          <h3> Quantity </h3>
          <input
            required
            className="availability__quantity"
            type="number"
            placeholder="0"
            onChange={handleQuantityChange}
          ></input>
          <h3 for="select"> Warehouse </h3>
          <select
            required
            className="availability__warehouse"
            name="Select"
            id="select"
            placeholder="Please Select"
            onChange={(e) => setWarehouse(e.target.value)}
          >
            <option value="" disabled selected>
              Please select
            </option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.warehouse_name}
              </option>
            ))}
          </select>
        </section>
      </section>
    </>
  );
}
