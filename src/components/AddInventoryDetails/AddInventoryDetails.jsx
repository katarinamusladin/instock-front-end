import React from "react";
import "./AddInventoryDetails.scss";

export default function AddInventoryDetails( { setCategory, setItemName,setDescription, categories, errors } ) {
  return (
    <>
      <section
        className="inventory-add__itemDetails"
      >
        <h2 className="inventory-add__itemDetails--header">Item Details</h2>
        <section className="details">
          <h3> Item Name </h3>
          <input
            className={`details__name ${errors.item_name ? "error" : ""}`}
            type="text"
            placeholder="Item Name"
            onChange={(e) => setItemName(e.target.value)}
            required
          ></input>
          {errors.item_name && <small className="error-message">Field required</small> }
          <h3> Description </h3>
          <input
            required
            className={`details__description ${errors.description ? "error" : ""}`}
            type="text"
            placeholder="Please enter a brief item description..."
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          {errors.description && <small className="error-message">Field required</small>}
          <h3 htmlFor="select"> Category</h3>
          <select
            required
            className="details__category"
            name="Select"
            id="select"
            placeholder="Please Select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Please select
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </section>
      </section>
    </>
  );
}
