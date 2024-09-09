import React from "react";
import "./AddWarehouseDetails.scss";

export default function AddWarehouseDetails( { setWarehouseName, setStreetAddress, setCity, setCountry, errors } ) {
    const errorMessage = () => {
        
        return ( 
        <>
        <div className="err">
            <img  className = "err__icon" src= "/src/assets/images/icons/error-24px.svg" alt= "exclamation mark"/>
            <small className="err__error-message"> This field is required</small>
        </div>
        </>
        )
    }
  
    return (
    <>
      <section
        className="inventory-add__itemDetails"
      >
        <h2 className="inventory-add__itemDetails--header">Warehouse Details</h2>
        <section className="details">
          <h3> Warehouse Name </h3>
          <input
            name="warehouse name"
            className={`details__warehouse ${errors.warehouseName ? "error" : ""}`}
            type="text"
            placeholder="Warehouse Name"
            onChange={(e) => setWarehouseName(e.target.value)}
          ></input>
          {errors.warehouseName && errorMessage() }
          <h3> Street Address </h3>
          <input
            name="street"
            className={`details__street ${errors.streetAddress ? "error" : ""}`}
            type="text"
            placeholder="Street Address"
            onChange={(e) => setStreetAddress(e.target.value)}
          ></input>
          {errors.streetAddress && errorMessage() }
          <h3> City</h3>
          <input
            name="city"
            className={`details__city ${errors.city ? "error" : ""}`}
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          {errors.city && errorMessage() }
          <h3> Country</h3>
          <input
            name="country"
            className={`details__country ${errors.country ? "error" : ""}`}
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          ></input>
          {errors.country && errorMessage()}
        </section>
      </section>
    </>
  );
}
