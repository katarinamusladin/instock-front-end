import "./PageHeader.scss";
import Button from "../Button/Button.jsx";
import { useNavigate, NavLink } from "react-router-dom";

export default function PageHeader({
	path1,
	icon,
	text,
	altText,
	btn,
	btnIcon,
	path2,
}) {
	const navigate = useNavigate();
	if (btn) {
		return (
			<div className="page-header">
				<Button path={path1} icon={icon} alt={altText} nav="yes" />
				<div className="page-header__left">
				<h1 className="page-header__header">{text}</h1>
				</div>
				<Button path={path2} icon={btnIcon} circle="yes" />
			</div>
		);
	} else {
		return (
			<div className="page-header">
				<div className="page-header__left">
					<NavLink to={path1}>
						<img src={icon} alt={altText} />
					</NavLink>
					<h1 className="page-header__header">{text}</h1>
				</div>
			</div>
		);
	}
}
