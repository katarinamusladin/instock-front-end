import "./EditWarehousePage.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
import EditWarehouseDetails from "../../components/EditWarehouseDetails/EditWarehouseDetails";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDebounce } from "../../utils/utils";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditWarehousePage() {
	document.title = "Edit Warehouse Details";
	const navigate = useNavigate();
	const { warehouseId } = useParams();
	const [editTopDetails, setEditTopDetails] = useState({});
	const [editBotDetails, setEditBotDetails] = useState({});
	const [debouncedEditTopDetails, setDebouncedEditTopDetails] = useState({});
	const [debouncedEditBotDetails, setDebouncedEditBotDetails] = useState({});
	const [formErrors, setFormErrors] = useState({});
	const topHeader = "Warehouse Details";
	const botHeader = "Contact Details";

	//matching form labels to input field names/keys
	const topLabels = {
		"Warehouse Name": "warehouse_name",
		"Street Address": "address",
		City: "city",
		Country: "country",
	};
	const botLabels = {
		"Contact Name": "contact_name",
		Position: "contact_position",
		"Phone Number": "contact_phone",
		Email: "contact_email",
	};

	// Debounced state for top and bot details - used to prevent onChange from happening every time a key is pressed (adjust delay if needed)
	const debouncedTopDetails = useDebounce(editTopDetails, 1000);
	const debouncedBotDetails = useDebounce(editBotDetails, 1000);

	async function getWarehouseDetails() {
		try {
			const response = await axios.get(
				`${BASE_URL}:${PORT}/api/warehouses/${warehouseId}`
			);
			const data = response.data;

			//This is for setting the placeholder text to warehouse details
			const topDetails = {
				warehouse_name: data.warehouse_name || "",
				address: data.address || "",
				city: data.city || "",
				country: data.country || "",
			};
			const botDetails = {
				contact_name: data.contact_name || "",
				contact_position: data.contact_position || "",
				contact_phone: data.contact_phone || "",
				contact_email: data.contact_email || "",
			};

			setEditTopDetails(topDetails);
			setEditBotDetails(botDetails);
		} catch (error) {
			console.log("Issue with fetching data for single warehouse:", error);
		}
	}

	useEffect(() => {
		if (warehouseId === null) return;
		getWarehouseDetails();
	}, [warehouseId]);

	useEffect(() => {
		setDebouncedEditTopDetails(debouncedTopDetails);
	}, [debouncedTopDetails]);

	useEffect(() => {
		setDebouncedEditBotDetails(debouncedBotDetails);
	}, [debouncedBotDetails]);

	//Validation logic
	const validateForm = () => {
		let errors = {};
		let isValid = true;

		const allValues = { ...editTopDetails, ...editBotDetails };
		for (let key in allValues) {
			if (!allValues[key]) {
				errors[key] = `This field is required!`;
				isValid = false;
			}
		}

		const email = editBotDetails.contact_email;
		if (email && !email.includes("@" && ".")) {
			errors.contact_email = "Email must include '@'.";
			isValid = false;
		}

		// Phone number validation should allow for: (), +, -, spaces
		const phone = editBotDetails.contact_phone;
		if (phone && !/^[0-9+\-\(\)\s]+$/.test(phone)) {
			errors.contact_phone = "Invalid phone number.";
			isValid = false;
		}

		setFormErrors(errors);
		return isValid;
	};

	//form submission and updating server/ backend db
	const editWarehouseHandle = async (event) => {
		event.preventDefault();
		if (!validateForm()) {
			console.log("Form validation failed.");
			return;
		}
		const pckg = {
			...debouncedEditTopDetails,
			...debouncedEditBotDetails,
		};
		try {
			const response = await axios.put(
				`${BASE_URL}:${PORT}/api/warehouses/${warehouseId}`,
				pckg
			);
			console.log("API Response:", response.data);
			getWarehouseDetails();
			navigate(`/warehouses/${warehouseId}`, { replace: true });
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	const handleInputChange = (section) => {
		return (event) => {
			const { name, value } = event.target;
			if (section === "top") {
				setEditTopDetails((oldValues) => ({
					...oldValues,
					[name]: value,
				}));
			} else if (section === "bot") {
				setEditBotDetails((oldValues) => ({
					...oldValues,
					[name]: value,
				}));
			}
		};
	};

	return (
		<article className="edit-warehouse">
			<section className="edit-warehouse__page">
				<PageHeader
					path1={`/warehouses/${warehouseId}`}
					icon={backIcon}
					text={"Edit Warehouse"}
					altText="back key icon"
				/>
				<div className="edit-warehouse__form-container">
					<form className="edit-warehouse__form" onSubmit={editWarehouseHandle}>
						<div className="edit-warehouse__form-top">
							<div className="edit-warehouse__half edit-warehouse__half--first">
								<EditWarehouseDetails
									header={topHeader}
									labels={topLabels}
									details={Object.entries(editTopDetails)}
									handleInputChange={handleInputChange("top")}
									formErrors={formErrors}
								/>
							</div>
							<div className="edit-warehouse__half">
								<EditWarehouseDetails
									header={botHeader}
									labels={botLabels}
									details={Object.entries(editBotDetails)}
									handleInputChange={handleInputChange("bot")}
									formErrors={formErrors}
								/>
							</div>
						</div>
						<div className="edit-warehouse__form-btns">
							<div className="edit-warehouse__form-btn">
								<a
									onClick={() =>
										navigate(`/warehouses/${warehouseId}`, { replace: true })
									}
									className="edit-warehouse__cancel"
								>
									Cancel
								</a>
							</div>
							<div className="edit-warehouse__form-btn">
								<Button
									type="submit"
									path={`/warehouses/${warehouseId}`}
									text="Save"
								/>
							</div>
						</div>
					</form>
				</div>
			</section>
		</article>
	);
}
