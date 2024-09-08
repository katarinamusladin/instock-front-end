import "./WarehouseDetails.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PageHeader from "../PageHeader/PageHeader";

export default function WarehouseDetails({ details, warehouseId }) {
	const {
		warehouse_name,
		address,
		city,
		country,
		contact_name,
		contact_position,
		contact_phone,
		contact_email,
	} = details;

	return (
		<section className="details">
			<PageHeader
				path1="/home"
				icon={backIcon}
				text={warehouse_name}
				altText="back key icon"
				btn="yes"
				btnIcon={editIcon}
				path2={`/warehouses/${warehouseId}/edit`}
			/>
			<div className="details__content">
				<div className="details__address">
					<h3 className="details__content-header">WAREHOUSE ADDRESS:</h3>
					<p>
						{address},{city},{country}
					</p>
				</div>
				<div className="details__contact">
					<div>
						<h3 className="details__content-header">CONTACT NAME:</h3>
						<p>{contact_name}</p>
						<p className="details__position">{contact_position}</p>
					</div>
					<div>
						<h3 className="details__content-header">CONTACT INFO:</h3>
						<p>{contact_phone}</p>
						<p>{contact_email}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
