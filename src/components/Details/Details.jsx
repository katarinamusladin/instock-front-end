import "./Details.scss";
import axios from "axios";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PageHeader from "../PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

export default function Details() {
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
	} else {
		const {
			warehouse_name,
			address,
			city,
			country,
			contact_name,
			contact_position,
			contact_phone,
			contact_email,
		} = details[0];

		return (
			<section className="details">
				<PageHeader
					path1="/home"
					icon={backIcon}
					text="Washington"
					altText="back key icon"
					btn="yes"
					btnIcon={editIcon}
					path2="/warehouses/:warehouseId/edit"
				/>
				<div className="details__content">
					<div className="details__address">
						<h3 className="details__content-header">{warehouse_name}</h3>
						<p>
							{address},{city},{country}
						</p>
					</div>
					<div className="details__contact">
						<div>
							<h3 className="details__content-header">CONTACT NAME</h3>
							<p>{contact_name}</p>
							<p className="details__position">{contact_position}</p>
						</div>
						<div>
							<h3 className="details__content-header">CONTACT INFO</h3>
							<p>{contact_phone}</p>
							<p>{contact_email}</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
