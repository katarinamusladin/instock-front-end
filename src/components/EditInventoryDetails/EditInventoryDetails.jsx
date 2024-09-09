import React from "react";
import "./EditInventoryDetails.scss";

export default function EditInventoryDetails({
	setCategory,
	setItemName,
	setDescription,
	categories,
	errors,
	itemDetails,
}) {
	if (!itemDetails) {
		return <p>Loading...</p>;
	}
	const { item_name, description, category } = itemDetails;
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

	return (
		<>
			<section className="inventory-add__itemDetails">
				<h2 className="inventory-add__itemDetails--header">Item Details</h2>
				<section className="details">
					<h3> Item Name </h3>
					<input
						className={`details__name ${errors.item_name ? "error" : ""}`}
						type="text"
						placeholder={item_name.toLowerCase()}
						onChange={(e) => setItemName(e.target.value)}
					></input>
					{errors.item_name && errorMessage()}
					<h3> Description </h3>
					<input
						className={`details__description ${
							errors.description ? "error" : ""
						}`}
						type="text"
						placeholder={description}
						onChange={(e) => setDescription(e.target.value)}
					></input>
					{errors.description && errorMessage()}
					<h3 htmlFor="select"> Category</h3>
					<select
						className={`details__category ${errors.category ? "error" : ""}`}
						name="select"
						id="select"
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="" enable="true">
							{category}
						</option>
						{categories.map((cat, index) => (
							<option key={index} value={cat}>
								{cat}
							</option>
						))}
					</select>
					{errors.category && errorMessage()}
				</section>
			</section>
		</>
	);
}
