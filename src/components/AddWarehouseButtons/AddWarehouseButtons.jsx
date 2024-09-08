import React from 'react'
import "./AddWarehouseButtons.scss";
import { Link } from 'react-router-dom';

export default function AddWarehouseButtons() {
  return (
    <>
        <section className="clicker">
            <Link to="/">
              <button className= "clicker__cancel">
                  Cancel</button>
            </Link>
            <button className= "clicker__add" type="submit" >
                + Add Warehouse</button>
        </section>
    </>
  )
}
