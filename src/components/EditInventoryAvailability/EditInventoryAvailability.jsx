import React from "react";
import "./EditInventoryAvailability.scss";
import { useEffect } from "react";

export default function EditInventoryAvailability({
	setQuantity,
	status,
	quantity,
	setStatus,
	handleQuantityChange,
	setWarehouse,
	warehouses,
	errors,
	itemDetails,
}) {
	if (!itemDetails) {
		return <p>Loading item status...</p>;
	}

	const errorMessage = () => {
		return (
			<>
				<div className="err">
					<img
						className="err__icon"
						src="/src/assets/images/icons/error-24px.svg"
						alt="exclamation mark"
					/>
					<small className="err__error-message"> This field is required</small>
				</div>
			</>
		);
	};

	useEffect(() => {
		if (status === "OutStock") {
			setQuantity(0);
		}
	}, [status, setQuantity]);

	return (
		<>
			<section className="inventory-add__itemAvail">
				<h2 className="inventory-add__itemAvail--header">Item Availability</h2>
				<section className="availability">
					<h3>Status</h3>
					<section className="availability__status">
						<input
							type="radio"
							name="status"
							value="InStock"
							checked={status === "InStock"}
							onChange={(e) => setStatus(e.target.value)}
						></input>
						<label className="availability__status--in" htmlFor="status">
							In stock{" "}
						</label>
						<input
							type="radio"
							name="status"
							id="status"
							value="OutStock"
							checked={status === "OutStock"}
							onChange={(e) => setStatus(e.target.value)}
						></input>
						<label className="availability__status--out" htmlFor="OutStock">
							Out of stock{" "}
						</label>
					</section>
					{status == "InStock" && (
						<>
							<h3> Quantity </h3>
							<input
								name="quantity"
								className={`availability__quantity ${
									errors.quantity ? "error" : ""
								}`}
								type="number"
								placeholder={itemDetails.quantity}
								onChange={handleQuantityChange}
							></input>
							{errors.quantity && errorMessage()}
						</>
					)}
					<h3 htmlFor="warehouse"> Warehouse </h3>
					<select
						className={`availability__warehouse ${
							errors.warehouse_id ? "error" : ""
						}`}
						name="warehouse"
						id="warehouse"
						placeholder="Please Select"
						onChange={(e) => setWarehouse(e.target.value)}
					>
						<option value="" enable="true">
							{itemDetails.warehouse_name}
						</option>
						{warehouses.map((warehouse) => (
							<option key={warehouse.id} value={warehouse.id}>
								{warehouse.warehouse_name}
							</option>
						))}
					</select>
					{errors.warehouse_id && errorMessage()}
				</section>
			</section>
		</>
	);
}
