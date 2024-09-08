import "./EditInventoryPage.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import PageHeader from "../../components/PageHeader/PageHeader";
// import EditInventoryDetails from "../../components/EditInventoryDetails/EditInventoryDetails";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
////////////////////////////////////////////////////
import AddInventoryButtons from "../../components/AddInventoryButtons/AddInventoryButtons";
import AddInventoryDetails from "../../components/AddInventoryDetails/AddInventoryDetails";
import AddInventoryAvailability from "../../components/AddInventoryAvailability/AddInventoryAvailability";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function EditInventoryPage() {
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
	/////////////////////////////////////////
	document.title = "Edit Inventory Details";
	const { inventoryId } = useParams();
	// const [editItem, setEditItem] = useState(null);

	// async function getInventoryDetails() {
	// 	try {
	// 		const response = await axios.get(
	// 			`${BASE_URL}:${PORT}/api/inventories/${inventoryId}`
	// 		);
	// 		setEditItem(response.data);
	// 	} catch (error) {
	// 		console.log(error, "issue with fetching data for inventory item.");
	// 	}
	// }

	// useEffect(() => {
	// 	if (inventoryId === null) return;
	// 	getInventoryDetails();
	// }, []);

	// if (editItem === null) {
	// 	return <h1>Loading... </h1>;
	// }

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

	const handleFormSubmit = async (event) => {
		event.preventDefault();

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

		const pckg = {
			warehouse_id,
			item_name,
			description,
			category,
			status,
			quantity,
		};

		try {
			const response = await axios.put(
				`${BASE_URL}:${PORT}/api/inventories/${inventoryId}`,
				pckg
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
			<article className="edit-inventory">
				<section className="edit-inventory__page">
					<PageHeader path1={"/home"} icon={backIcon} text={"back key icon"} />
					<form className="wrapper" onSubmit={handleFormSubmit}>
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
								warehouses={warehouses}
								status={status}
								handleQuantityChange={handleQuantityChange}
								setWarehouse={setWarehouse}
								setStatus={setStatus}
								errors={errors}
							/>
						</div>
					</form>
					<div className="click">
						<AddInventoryButtons onClick={handleFormSubmit} />
					</div>
				</section>
			</article>
		</>
	);
}
