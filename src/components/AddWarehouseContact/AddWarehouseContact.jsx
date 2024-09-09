import React from "react";
import "./AddWarehouseContact.scss";
import { useState } from "react";

export default function AddWarehouseContact( { setContactName, setPosition, setPhoneNumber, setEmail, errors } ) {
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const errorMessage = (message) => {
        
        return ( 
        <>
        <div className="err">
            <img  className = "err__icon" src= "/src/assets/images/icons/error-24px.svg" alt= "exclamation mark"/>
            <small className="err__error-message"> {message}</small>
        </div>
        </>
        )
    }

    const validateEmail = (email) => {
        const isValid = email.includes("@") && email.includes(".");
        setEmailError(!isValid);
        setEmail(email);
      };

    const validateNumber = (phoneNumber) => {
        const isValid = /^[0-9+\-\(\)\s]+$/.test(phoneNumber);
        setPhoneError(!isValid);
        setPhoneNumber(phoneNumber);
      };

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
          {errors.contactName && errorMessage ("This field is required")}
          <h3> Position </h3>
          <input
            name="position"
            className={`details__position ${errors.position ? "error" : ""}`}
            type="text"
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          ></input>
          {errors.position && errorMessage ("This field is required") }
          <h3> Phone Number</h3>
          <input
            name = "phone number"
            className={`details__number ${errors.phoneNumber || phoneError ? "error" : ""}`}
            type="text"
            placeholder="Phone Number"
            onChange={(e) => validateNumber(e.target.value)}
          ></input>
          {errors.phoneNumber && errorMessage ("This field is required") }
          {phoneError && errorMessage ("Incorrect phone number format") } 
          <h3> Email</h3>
          <input
            name="email"
            className={`details__email ${errors.email || emailError ? "error" : ""}`}
            type="text"
            placeholder="Email"
            onChange={(e) => validateEmail(e.target.value)}
          ></input>
          {errors.email && errorMessage ("This field is required") }
          {emailError && errorMessage ("Incorrect email format") } 
        </section>
      </section>
    </>
  );
}
