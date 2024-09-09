import "./AddWarehousePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import React from "react";
import AddWarehouseButtons from "../../components/AddWarehouseButtons/AddWarehouseButtons";
import AddWarehouseDetails from "../../components/AddWarehouseDetails/AddWarehouseDetails";
import AddWarehouseContact from "../../components/AddWarehouseContact/AddWarehouseContact";

export default function AddWarehousePage() {
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    warehouseName: false,
    streetAddress: false,
    city: false,
    country: false,
    contactName: false,
    position: false,
    phoneNumber: false,
    email: false,
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const PORT = import.meta.env.VITE_PORT;

  document.title = "Add New Warehouse";

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      warehouseName: !warehouseName,
      streetAddress: !streetAddress,
      city: !city,
      country: !country,
      contactName: !contactName,
      position: !position,
      phoneNumber: !phoneNumber,
      email: !email,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return console.log("Missing input data");
    }


    const warehouse_name = warehouseName;
    const address = streetAddress;
    const contact_name = contactName;
    const contact_position = position;
    const contact_phone = phoneNumber;
    const contact_email = email;

    const newWarehouse = {
      warehouse_name,
      address,
      city,
      country,
      contact_name,
      contact_position,
      contact_phone,
      contact_email,
    };
    console.log(newWarehouse);

    try {
      const response = await axios.post(
        `${BASE_URL}:${PORT}/api/warehouses`,
        newWarehouse
      );
      console.log("warehouse added", response.data);
    } catch (error) {
      console.log(error, "issue adding item");
    }
  };

  return (
    <>
      <article className="warehouse-add__container">
        <section className="warehouse-add__details">
          <PageHeader
            path1={"/"}
            icon={"/src/assets/images/icons/arrow_back-24px.svg"}
            text={"Add New Warehouse"}
          />
          <form onSubmit={handleFormSubmit}>
            <div className="container">
                <div className="container__left">
                <AddWarehouseDetails
                    setWarehouseName={setWarehouseName}
                    setStreetAddress={setStreetAddress}
                    setCity={setCity}
                    setCountry={setCountry}
                    errors={errors}
                    />
                </div>
                <div className="container__right">
                <AddWarehouseContact
                    setContactName={setContactName}
                    setPosition={setPosition}
                    setPhoneNumber={setPhoneNumber}
                    setEmail={setEmail}
                    errors={errors}
                    />
                </div>
            </div>
            <div className="clicking">
                <AddWarehouseButtons />
            </div>
          </form>
          
        </section>
      </article>
    </>
  );
}
