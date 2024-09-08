import "./HomePage.scss";
import WareHouseList from "../../components/WarehouseList/WarehouseList";
export default function HomePage() {
	document.title = "Home";
	return (
		<>
			{/* TODO: remove comments if not used */}
			{/* <article className="home__container">
				<section className="home__list">
			{/* </section>
			</article>  */}
			<WareHouseList />
		</>
	);
}
