import "./WarehouseDetailsPage.scss";
import axios from "axios";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function WarehouseDetailsPage() {
	document.title = "Warehouse Details";
	const { warehouseId } = useParams();
	const [details, setDetails] = useState(null);

	async function getWarehouseDetails() {
		try {
			const response = await axios.get(
				`${BASE_URL}:${PORT}/api/warehouses/${warehouseId}`
			);
			setDetails(response.data);
		} catch (error) {
			console.log(error, "issue with fetching data for single warehouse.");
		}
	}

	useEffect(() => {
		if (warehouseId === null) return;
		getWarehouseDetails();
	}, []);

	if (details === null) {
		return <h1>Loading... </h1>;
	}
	return (
		<>
			<article className="warehouse-details__container">
				<section className="warehouse-details__details">
					<WarehouseDetails details={details} />
				</section>
				<section className="warehouse-details__list">
					{/* INSERT LIST COMPONENT HERE */}
				</section>
			</article>
		</>
	);
}
