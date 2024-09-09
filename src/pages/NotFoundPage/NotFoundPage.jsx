import "./NotFoundPage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<article className="not-found">
			<div className="not-found__details">
				<PageHeader text="PAGE NOT FOUND" />
			</div>
			<section className="not-found__content">
				<p className="not-found__text">
					Sorry but it looks like the page you're looking for could not be
					found. Please return to:
				</p>
				<div className="not-found__btns">
					<NavLink to="/home">
						<button className="not-found__btn"> Warehouses </button>
					</NavLink>
					<NavLink to="/inventories">
						<button className="not-found__btn"> Inventory </button>
					</NavLink>
				</div>
			</section>
		</article>
	);
}
