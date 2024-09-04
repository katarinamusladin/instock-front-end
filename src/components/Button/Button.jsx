import "./Button.scss";

export default function Button({ icon, text, altText, circle }) {
	if (circle) {
		return (
			<button className={"btn btn--circle"}>
				<img
					className={`${icon ? "btn__image" : ""}`}
					src={icon}
					alt={altText}
				/>
			</button>
		);
	} else if (text) {
		return (
			<button className={`btn ${icon ? "" : "btn--secondary"}`}>
				<img
					className={`${icon ? "btn__image" : ""}`}
					src={icon}
					alt={altText}
				/>
				{text.toUpperCase()}
			</button>
		);
	} else {
		return (
			<button className={`btn ${icon ? "" : "btn--secondary"}`}>
				<img
					className={`${icon ? "btn__image" : ""}`}
					src={icon}
					alt={altText}
				/>
			</button>
		);
	}
}
