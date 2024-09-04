import "./PageHeader.scss";
import Button from "../Button/Button.jsx";

export default function PageHeader({ btn, icon, text, altText, btnIcon }) {
	if (btn) {
		return (
			<div className="page-header">
				<div className="page-header__left">
					<img src={icon} alt={altText} />
					<h1 className="page-header__header">{text}</h1>
				</div>
				<Button icon={btnIcon} circle="yes" />
			</div>
		);
	} else {
		return (
			<div className="page-header">
				<div className="page-header__left">
					<img src={icon} alt={altText} />
					<h1 className="page-header__header">{text}</h1>
				</div>
			</div>
		);
	}
}
