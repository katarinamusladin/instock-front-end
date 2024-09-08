import { useEffect, useState } from "react";
import axios from "axios";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import WarehouseHeaderList from "../../components/WarehouseHeaderList/WarehouseHeaderList";
import Arrows from "../../assets/images/icons/sort-24px.svg";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import "./InventoryPage.scss";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./InventoryPage.scss";
import { NavLink, useParams } from "react-router-dom";

function InventoryPage() {
  document.title = "Inventory";
	const inventoryId = useParams();
	const [inventoryItems, setInventoryItems] = useState([]);
	const [warehouses, setWarehouses] = useState({});
	const [loading, setLoading] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const columnsData = [
		["Inventory Item", "Category"],
		["Status", "Quantity", "Warehouse"],
	];

	useEffect(() => {
		const fetchInventoryItems = async () => {
			try {
				const baseUrl = `${import.meta.env.VITE_BASE_URL}:${
					import.meta.env.VITE_PORT
				}`;
				const responseInv = await axios.get(`${baseUrl}/api/inventories`);
				const responseWar = await axios.get(`${baseUrl}/api/warehouses`);

				const warehouseMap = responseWar.data.reduce((acc, warehouse) => {
					acc[warehouse.id] = warehouse.warehouse_name;
					return acc;
				}, {});

				setInventoryItems(responseInv.data);
				setWarehouses(warehouseMap);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching inventory data:", error);
				setLoading(false);
			}
		};

		fetchInventoryItems();
	}, []);

	const handleDeleteClick = (item) => {
		setSelectedItem(item);
		setModalVisible(true);
	};

	const handleDeleteConfirm = async () => {
		try {
			const baseUrl = `${import.meta.env.VITE_BASE_URL}:${
				import.meta.env.VITE_PORT
			}`;
			await axios.delete(`${baseUrl}/api/inventories/${selectedItem.id}`);

			setInventoryItems((prevItems) =>
				prevItems.filter((item) => item.id !== selectedItem.id)
			);

			setModalVisible(false);
			setSelectedItem(null);
		} catch (error) {
			console.error("Error deleting inventory item:", error);
		}
	};

	const handleCloseModal = () => {
		setModalVisible(false);
		setSelectedItem(null);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="warehouses">
			<SearchHeader title="Inventory" type="Item" addPath="/inventories/add" />
			<WarehouseHeaderList
				columns={columnsData}
				actionText="Actions"
				iconSrc={Arrows}
			/>

			{inventoryItems.map((item) => {
				const statusClass =
					item.status === "In Stock"
						? "status-in-stock"
						: "status-out-of-stock";

				return (
					<div key={item.id} className="warehouses__item">
						<div className="warehouses__text-box">
							<div className="warehouses__column">
								<div className="warehouses__content warehouses__content--long">
									<h3 className="warehouses__mobile-header">Inventory Item</h3>
									<div className="warehouses__name-wrapper">
										{/* TODO: ADD NAVIGATION FROM ITEM TO ITEM DETAILS PAGE */}
										<p className="warehouses__name">{item.item_name}</p>
										<img
											src={arrowRight}
											alt="Arrow Right"
											className="warehouses__name--icon"
										/>
									</div>
								</div>
								<div className="warehouses__content warehouses__content--long">
									<h3 className="warehouses__mobile-header">Category</h3>
									<p>{item.category}</p>
								</div>
							</div>
							<div className="warehouses__column">
								<div className="warehouses__content warehouses__content--short">
									<h3 className="warehouses__mobile-header">Status</h3>
									<p className={statusClass}>{item.status}</p>
								</div>
								<div className="warehouses__content warehouses__content--short">
									<h3 className="warehouses__mobile-header">QTY</h3>
									<p>{item.quantity}</p>
								</div>
								<div className="warehouses__content warehouses__content--short">
									<h3 className="warehouses__mobile-header">Warehouse</h3>
									<p>{warehouses[item.warehouse_id]}</p>
								</div>
							</div>
						</div>
						<div className="warehouses__action">
							<h3 className="warehouses__mobile-header active">ACTIONS</h3>
							<button
								className="warehouses__icon-button"
								onClick={() => handleDeleteClick(item)}
							>
								<img src={deleteIcon} alt="Delete icon" />
							</button>
							<button className="warehouses__icon-button">
								<img src={editIcon} alt="Edit icon" />
							</button>
						</div>
					</div>
				);
			})}

			{modalVisible && (
				<DeleteModal
					onClose={handleCloseModal}
					title={`Delete ${selectedItem.item_name} inventory item?`}
					message={`Please confirm that you’d like to delete ${selectedItem.item_name} from the inventory list. You won’t be able to undo this action.`}
					onConfirm={handleDeleteConfirm}
				/>
			)}
		</div>
	);
}

export default InventoryPage;
