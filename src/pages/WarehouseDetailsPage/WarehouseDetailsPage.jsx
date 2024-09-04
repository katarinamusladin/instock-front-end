import "./WarehouseDetailsPage.scss";
import Details from "../../components/Details/Details";

export default function HomePage() {
	document.title = "Warehouse Details";
	return (
		<>
			<article className="warehouse-details__container">
				<section className="warehouse-details__details">
					<Details details="DATA-FROM-DB" />
				</section>
				<section className="warehouse-details__list">
					{/* INSERT LIST COMPONENT HERE */}
				</section>
			</article>
		</>
	);
}
