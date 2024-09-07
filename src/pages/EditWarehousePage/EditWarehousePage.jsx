import "./EditWarehousePage.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
import EditWarehouseDetails from "../../components/EditWarehouseDetails/EditWarehouseDetails";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditWarehousePage() {
	const { warehouseId } = useParams();
	console.log(warehouseId);
	const [editDetails, setEditDetails] = useState(null);

	const [errors, setErrors] = useState({
		warehouse_id: false,
		item_name: false,
		description: false,
		category: false,
		quantity: false,
	});

	document.title = "Edit Warehouse Details";

	function editWarehouseHandle(event) {
		event.preventDefault();
		console.log(event.target.value);
	}

	async function getWarehouseDetails() {
		try {
			const response = await axios.get(
				`${BASE_URL}:${PORT}/api/warehouses/${warehouseId}`
			);
			setEditDetails(response.data);
		} catch (error) {
			console.log(error, "issue with fetching data for single warehouse.");
		}
	}

	useEffect(() => {
		if (warehouseId === null) return;
		getWarehouseDetails();
	}, []);

	if (editDetails === null) {
		return <h1>Loading... </h1>;
	}

	// const { warehouse_name } = editDetails;
	const entryOfDetails = Object.entries(editDetails);
	const topEntries = entryOfDetails.slice(0, 4);
	const botEntries = entryOfDetails.slice(4, 8);
	const topHeader = "Warehouse Details";
	const botHeader = "Contact Details";
	const topLabels = ["Warehouse Name", "Street Address", "City", "Country"];
	const botLabels = ["Contact Name", "Position", "Phone Number", "Email"];

	const path1 = `/warehouses/${warehouseId}`;

	//FIXME: for some reason for the edit warehouse page, the back button does not lead back to home... :(
	return (
		<article className="edit-warehouse">
			<section className="edit-warehouse__page">
				<PageHeader
					path1={path1}
					icon={backIcon}
					text="Edit Warehouse"
					altText="back key icon"
				/>
				<div className="edit-warehouse__form-container">
					<form className="edit-warehouse__form" onSubmit={editWarehouseHandle}>
						<div className="edit-warehouse__form-top">
							<div className="edit-warehouse__half edit-warehouse__half--first">
								<EditWarehouseDetails
									header={topHeader}
									labels={topLabels}
									details={topEntries}
									warehouseId={warehouseId}
									submitFunc={editWarehouseHandle}
								/>
							</div>
							<div className="edit-warehouse__half">
								<EditWarehouseDetails
									header={botHeader}
									labels={botLabels}
									details={botEntries}
									warehouseId={warehouseId}
									submitFunc={editWarehouseHandle}
								/>
							</div>
						</div>
						<div className="edit-warehouse__form-btns">
							{/* TODO: CHANGE FROM BUTTON TO LINK AND STYLE IT LIKE BUTTON! */}
							<div className="edit-warehouse__form-btn">
								{/* <Button
									path={`/warehouses/${warehouseId}/edit`}
									text="Cancel"
									secondary="yes"
								/> */}
							</div>
							<NavLink
								to={`/warehouses/${warehouseId}`}
								className="edit-warehouse__form-btn"
							>
								<Button
									type="submit"
									path={`/warehouses/${warehouseId}`}
									text="Save"
									onSubmit={editWarehouseHandle}
								/>
							</NavLink>
						</div>
					</form>
				</div>
			</section>
		</article>
	);
}
