import "./HomePage.scss";
import Details from "../../components/Details/Details";

export default function HomePage() {
	document.title = "Home";
	return (
		<>
			<article className="home__container">
				<section className="home__details">
					<Details details="DATA-FROM-DB" />
				</section>
				<section className="home__list">
					{/* INSERT LIST COMPONENT HERE */}
				</section>
			</article>
		</>
	);
}
