import "./AddInventoryPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AddInventoryButtons from "../../components/AddInventoryButtons/AddInventoryButtons";
import AddInventoryDetails from "../../components/AddInventoryDetails/AddInventoryDetails";
import AddInventoryAvailability from "../../components/AddInventoryAvailability/AddInventoryAvailability";

export default function AddInventoryPage() {
	const [item_name, setItemName] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [status, setStatus] = useState("InStock");
	const [quantity, setQuantity] = useState(0);
	const [warehouse_id, setWarehouse] = useState("");
	const [warehouses, setWarehouses] = useState([]);
	const [categories, setCategories] = useState([]);

	const [errors, setErrors] = useState({
		warehouse_id: false,
		item_name: false,
		description: false,
		category: false,
		quantity: false,
	});

	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const PORT = import.meta.env.VITE_PORT;

	document.title = "Add Inventory Item";

	useEffect(() => {
		const fetchWarehousesAndCategories = async () => {
			try {
				const warehouseResponse = await axios.get(
					`${BASE_URL}:${PORT}/api/warehouses`
				);
				setWarehouses(warehouseResponse.data);

				const inventoryResponse = await axios.get(
					`${BASE_URL}:${PORT}/api/inventories`
				);
				const inventoryData = inventoryResponse.data;

				const uniqueCategories = [
					...new Set(inventoryData.map((item) => item.category)),
				];
				setCategories(uniqueCategories);
			} catch (error) {
				console.error("Error fetching warehouse or inventory data:", error);
			}
		};

		fetchWarehousesAndCategories();
	}, []);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const newErrors = {
			warehouse_id: !warehouse_id,
			item_name: !item_name,
			description: !description,
			category: !category,
			quantity: quantity.length === 0,
		};

		setErrors(newErrors);

		if (Object.values(newErrors).some((error) => error)) {
			return console.log("Missing input data");
		}

		const newItem = {
			warehouse_id,
			item_name,
			description,
			category,
			status,
			quantity,
		};

		try {
			const response = await axios.post(
				`${BASE_URL}:${PORT}/api/inventories`,
				newItem
			);
			console.log("item added", response.data);
		} catch (error) {
			console.log(error, "issue adding item");
		}
	};

	const handleQuantityChange = (e) => {
		const newQuantity = e.target.value;
		setQuantity(newQuantity);

		if (newQuantity === "0") {
			setStatus("OutStock");
		}
	};

	return (
		<>
			<article className="inventory-add__container">
				<section className="inventory-add__details">
					<PageHeader
						path1={"/"}
						icon={"/src/assets/images/icons/arrow_back-24px.svg"}
						text={"Add New Inventory Item"}
					/>
					<form onSubmit={handleFormSubmit}>
						<div className="wrapper">
							<div className="wrapper__left">
								<AddInventoryDetails
									setCategory={setCategory}
									setItemName={setItemName}
									setDescription={setDescription}
									categories={categories}
									errors={errors}
								/>
							</div>
							<div className="wrapper__right">
								<AddInventoryAvailability
									setQuantity={setQuantity}
									warehouses={warehouses}
									status={status}
									handleQuantityChange={handleQuantityChange}
									setWarehouse={setWarehouse}
									setStatus={setStatus}
									errors={errors}
								/>
							</div>
						</div>
						<div className="click">
							<AddInventoryButtons
								onClick={handleFormSubmit}
								btnText={"+ Add Item"}
							/>
						</div>
					</form>
				</section>
			</article>
		</>
	);
}
