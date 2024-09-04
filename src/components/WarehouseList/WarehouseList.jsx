import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
function WarehouseList() {
  const details = {
    address: "Toronto",
    fullName: "Katarina",
    phoneNumber: "1234 4566",
    email: "katarina@gmail.com",
  };

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
            {/* <Link to="/">  */}
            <button className="warehouses__header-form-button">
              + Add New Warehouse
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>

      <div className="warehouses__item">
        <div className="warehouses__text-box">
          <div className="warehouses__column">
            <div className="warehouses__content warehouses__content--short">
              <h3 className="warehouses__mobile-header">
                Warehouse
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>

              <p>Warehouse</p>
            </div>
            <div className="warehouses__content warehouses__content--long">
              <h3 className="warehouses__mobile-header">
                Address
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
              <p>{details.address}</p>
            </div>
          </div>
          <div className="warehouses__column">
            <div className="warehouses__content warehouses__content--short">
              <h3 className="warehouses__mobile-header">
                Contact Name
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
              <p>{details.fullName}</p>
            </div>
            <div className="warehouses__content warehouses__content--long">
              <h3 className="warehouses__mobile-header">
                Contact Information
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
              <p>{details.phoneNumber}</p>
              <p>{details.email}</p>
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
    </div>
  );
}

export default WarehouseList;
