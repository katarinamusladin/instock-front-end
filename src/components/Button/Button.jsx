import "./Button.scss";
import { NavLink } from "react-router-dom";

export default function Button({
	path,
	icon,
	text,
	altText,
	circle,
	nav,
	secondary,
}) {
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
			<NavLink to={path}>
				<button className={"btn btn--circle"}>
					<img
						className={`${icon ? "btn__image" : ""}`}
						src={icon}
						alt={altText ? altText : ""}
					/>
					<p className="btn__text">Edit</p>
				</button>
			</NavLink>
		);
	} else if (text) {
		if (secondary) {
			return <button className={"btn btn--text-secondary"}>{text}</button>;
		} else {
			return <button className={"btn btn--text"}>{text}</button>;
		}
	}
}
