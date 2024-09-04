import "./Button.scss";
import { NavLink, Link } from "react-router-dom";

export default function Button({ path, icon, text, altText, circle, nav }) {
	if (nav) {
		return (
			<NavLink to={`${path}`}>
				<button className={`btn btn--nav`}>
					<img
						className={`${icon ? "btn__image" : ""}`}
						src={icon}
						alt={altText}
					/>
				</button>
			</NavLink>
		);
	} else if (circle) {
		return (
			<NavLink to={`${path}`}>
				<button className={"btn btn--circle"}>
					<img
						className={`${icon ? "btn__image" : ""}`}
						src={icon}
						alt={altText}
					/>
				</button>
			</NavLink>
		);
	} else if (text) {
		return (
			<button className={`btn ${text ? "" : "btn--text"}`}>
				<img
					className={`${icon ? "btn__image" : ""}`}
					src={icon}
					alt={altText}
				/>
				{text.toUpperCase()}
			</button>
		);
	}
}
