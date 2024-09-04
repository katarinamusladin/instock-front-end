import React from 'react';
import Arrows from '../../assets/images/icons/sort-24px.svg'; // Update path if needed
import './WarehouseList.scss';

function WarehouseHeader() {
  return (
    <div className="header__appear">
      <div className="warehouses__item">
        <div className="warehouses__text-box">
          <div className="warehouses__column">
            <div className="warehouses__content warehouses__content--short">
              <h3 className="warehouses__mobile-header1">
                Warehouse
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
            </div>
            <div className="warehouses__content warehouses__content--long">
              <h3 className="warehouses__mobile-header1">
                Address
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
            </div>
          </div>
          <div className="warehouses__column">
            <div className="warehouses__content warehouses__content--short">
              <h3 className="warehouses__mobile-header1">
                Contact Name
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
            </div>
            <div className="warehouses__content warehouses__content--long">
              <h3 className="warehouses__mobile-header1">
                Contact Information
                <img
                  src={Arrows}
                  alt="Arrows"
                  className="warehouses__mobile-header--icon"
                />
              </h3>
            </div>
          </div>
        </div>
        <div className="warehouses__action">
          <h3 className="warehouses__mobile-header1 active">ACTIONS</h3>
        </div>
      </div>
    </div>
  );
}

export default WarehouseHeader;