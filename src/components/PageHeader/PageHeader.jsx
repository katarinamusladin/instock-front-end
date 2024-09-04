import "./PageHeader.scss";
import Button from "../Button/Button.jsx";
import { NavLink } from "react-router-dom";

export default function PageHeader({
	path1,
	icon,
	text,
	altText,
	btn,
	btnIcon,
	path2,
}) {
	if (btn) {
		return (
			<div className="page-header">
				<div className="page-header__left">
					<Button path={path1} icon={icon} alt={altText} nav="yes" />
					<h1 className="page-header__header">{text}</h1>
				</div>
				<Button icon={btnIcon} path2={path2} circle="yes" />
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
