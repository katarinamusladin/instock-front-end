import React from "react";
import "./AddWarehouseContact.scss";

export default function AddWarehouseContact( { setContactName, setPosition, setPhoneNumber, setEmail, errors } ) {
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
        <h2 className="inventory-add__itemDetails--header">Contact Details</h2>
        <section className="details">
          <h3>Contact Name </h3>
          <input
            name= "contact name"
            className={`details__contact ${errors.contactName ? "error" : ""}`}
            type="text"
            placeholder="Contact Name"
            onChange={(e) => setContactName(e.target.value)}
          ></input>
          {errors.contactName && errorMessage ()}
          <h3> Position </h3>
          <input
            name="position"
            className={`details__position ${errors.position ? "error" : ""}`}
            type="text"
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          ></input>
          {errors.position && errorMessage () }
          <h3> Phone Number</h3>
          <input
            name = "phone number"
            className={`details__number ${errors.phoneNumber ? "error" : ""}`}
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
          {errors.phoneNumber && errorMessage () }
          <h3> Email</h3>
          <input
            name="email"
            className={`details__email ${errors.email ? "error" : ""}`}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && errorMessage () }
        </section>
      </section>
    </>
  );
}
