import "./HomePage.scss";
import Details from "../../components/WarehouseDetails/WarehouseDetails";
import WareHouseList from "../../components/WarehouseList/WarehouseList";
export default function HomePage() {
	document.title = "Home";
	return (
		<>
			{/* <article className="home__container">
				<section className="home__list">
					{/* INSERT LIST COMPONENT HERE */}
			{/* </section>
			</article>  */}
			<WareHouseList />
		</>
	);
}
