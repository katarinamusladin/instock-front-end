import "./EditWarehousePage.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
// import EditWarehouseDetails from "../../components/EditWarehouseDetails/EditWarehouseDetails";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditWarehousePage() {
	const { warehouseId } = useParams();
	const [editDetails, setEditDetails] = useState(null);

	document.title = "Edit Warehouse Details";

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
	const { warehouse_name } = editDetails;
	const entryOfDetails = Object.entries(editDetails);
	const topEntries = entryOfDetails.slice(0, 4);
	const botEntries = entryOfDetails.slice(4, 8);
	const topHeader = "Warehouse Details";
	const botHeader = "Contact Details";
	const topLabels = ["Warehouse Name", "Street Address", "City", "Country"];
	const botLabels = ["Contact Name", "Position", "Phone Number", "Email"];

	return (
		<article className="edit-warehouse">
			<section className="edit-warehouse__page">
				<PageHeader
					path1="/home"
					icon={backIcon}
					text="Edit Warehouse"
					altText="back key icon"
				/>
				<div className="edit-warehouse__form-container">
					<form className="edit-warehouse__form">
						<div className="edit-warehouse__form-top">
							<div className="edit-warehouse__half edit-warehouse__half--first">
								<EditWarehouseDetails
									header={topHeader}
									labels={topLabels}
									details={topEntries}
									warehouseId={warehouseId}
								/>
							</div>
							<div className="edit-warehouse__half">
								<EditWarehouseDetails
									header={botHeader}
									labels={botLabels}
									details={botEntries}
									warehouseId={warehouseId}
								/>
							</div>
						</div>
						<div className="edit-warehouse__form-btns">
							{/* TODO: CHANGE FROM BUTTON TO LINK AND STYLE IT LIKE BUTTON! */}
							<div className="edit-warehouse__form-btn">
								<Button
									path={`/warehouses/edit/${warehouseId}`}
									text="Cancel"
									secondary="yes"
									// onClick={cancelHandle}
								/>
							</div>
							<div className="edit-warehouse__form-btn">
								<Button
									type="submit"
									path={`/warehouses/${warehouseId}`}
									text="Save"
									// onSubmit={editWarehouseHandle}
								/>
							</div>
						</div>
					</form>
				</div>
			</section>
		</article>
	);
}
