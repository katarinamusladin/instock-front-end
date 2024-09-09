import "./HomePage.scss";
import WareHouseList from "../../components/WarehouseList/WarehouseList";
export default function HomePage() {
	document.title = "Home";
	return (
		<>
			<article className="home__container">
				<section>
					<WareHouseList />
				</section>
			</article>
		</>
	);
}
