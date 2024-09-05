import React from "react";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import "../WarehouseList/WarehouseList.scss";

const WarehouseHeaderList = ({ columns, actionText = "Actions", iconSrc }) => {
  return (
    <div className="header__appear">
      <div className="warehouses__item1">
        <div className="warehouses__text-box">
          {columns.map((columnGroup, index) => (
            <div className="warehouses__column" key={index}>
              {columnGroup.map((column, idx) => (
                <div
                  className="warehouses__content warehouses__content--long"
                  key={idx}
                >
                  <h3 className="warehouses__mobile-header1">
                    {column}
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt="Arrows"
                        className="warehouses__mobile-header--icon"
                      />
                    )}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="warehouses__action">
          <h3 className="warehouses__mobile-header1 active">{actionText}</h3>
        </div>
      </div>
    </div>
  );
};

export default WarehouseHeaderList;
