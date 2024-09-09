import "./InventoryDetails.scss";
import backIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIcon from "../../assets/images/icons/edit-white-24px.svg";
import PageHeader from "../PageHeader/PageHeader";

export default function InventoryDetails({ details, inventoryId }) {
	const { warehouse_name, item_name, description, category, status, quantity } =
		details;

	return (
		<section className="item-details">
			<div className="item-details__header">
				<PageHeader
					path1="/home"
					icon={backIcon}
					text={item_name}
					altText="back key icon"
					btn="yes"
					btnIcon={editIcon}
					path2={`/inventories/${inventoryId}/edit`}
				/>
			</div>
			<div className="item-details__content">
				<div className="item-details__left">
					<div className="item-details__description">
						<h3 className="item-details__content-header">ITEM DESCRIPTION:</h3>
						<p className="item-details__text">{description}</p>
					</div>
					<div className="item-details__category">
						<h3 className="item-details__content-header">CATEGORY:</h3>
						<p className="item-details__text">{category}</p>
					</div>
				</div>
				<div className="item-details__right">
					<div className="item-details__stock">
						<div>
							<h3 className="item-details__content-header">STATUS:</h3>
							{status === "In Stock" ? (
								<p className="item-details__tag"> IN STOCK </p>
							) : (
								<p className="item-details__tag item-details__tag--out">
									{" "}
									OUT OF STOCK{" "}
								</p>
							)}
						</div>
						<div>
							<h3 className="item-details__content-header">QUANTITY:</h3>
							<p className="item-details__text">{quantity}</p>
						</div>
					</div>
					<div className="item-details__location">
						<h3 className="item-details__content-header">WAREHOUSE:</h3>
						<p className="item-details__text">{warehouse_name}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
