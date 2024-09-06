import "./InventoryDetailsPage.scss";
import axios from "axios";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function InventoryDetailsPage() {
	document.title = "Inventory Item Details";
	const { inventoryId } = useParams();
	const [itemDetails, setItemDetails] = useState(null);

	async function getInventoryDetails() {
		try {
			const response = await axios.get(
				`${BASE_URL}:${PORT}/api/inventories/${inventoryId}`
			);
			setItemDetails(response.data);
		} catch (error) {
			console.log(error, "issue with fetching data for single inventory item.");
		}
	}

	useEffect(() => {
		if (inventoryId === null) return;
		getInventoryDetails();
	}, []);

	if (itemDetails === null) {
		return <h1>Loading... </h1>;
	} else {
		return (
			<>
				<article className="inventory-details__container">
					<section className="inventory-details__details">
						<InventoryDetails details={itemDetails} />
					</section>
				</article>
			</>
		);
	}
}
