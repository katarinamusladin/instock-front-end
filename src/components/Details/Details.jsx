import "./Details.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PageHeader from "../PageHeader/PageHeader";

export default function Details() {
	//REMOVE WHEN REAL DATA IS AVAILABLE:
	const details = {
		address: "placeholder text",
		contactName: "placeholder text",
		contactInfo: "placeholder text",
	};
	//TODO: CHANGE PATH if necessary!
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
					<h3 className="details__content-header">WAREHOUSE ADDRESS</h3>
					<p>{details.address}</p>
				</div>
				<div className="details__contact">
					<div>
						<h3 className="details__content-header">CONTACT NAME</h3>
						<p>{details.contactName}</p>
					</div>
					<div>
						<h3 className="details__content-header">CONTACT INFO</h3>
						<p>{details.contactInfo}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
