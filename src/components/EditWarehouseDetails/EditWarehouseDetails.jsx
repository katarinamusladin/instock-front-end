import "./EditWarehouseDetails.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditWarehouseDetails({
	header,
	labels,
	details,
	warehouseId,
}) {
	return (
		<section className="edit-warehouse-details">
			<h2>{header}</h2>
			{labels.map((item, index) => (
				<div key={index}>
					<label className="edit-warehouse-details__label" htmlFor={`${item}`}>
						<h3>{`${item}`}</h3>
						<input
							className="edit-warehouse-details__input"
							type="text"
							name={`${item}`}
							id={`${item}`}
							placeholder={details[index][1]}
						></input>
					</label>
				</div>
			))}
		</section>
	);
}
