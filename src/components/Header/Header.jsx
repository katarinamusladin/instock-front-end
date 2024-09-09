import "./Header.scss";
import Logo from "../../assets/images/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar__logo-container">
					<NavLink to="/home">
						<img src={Logo} className="navbar__img" alt="Instock" />
					</NavLink>
				</div>
				<div className="navbar__links">
					<ul className="navbar__list">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? "navbar__link navbar__warehouses navbar__warehouses--active"
										: "navbar__link navbar__warehouses"
								}
							>
								Warehouses
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/inventories"
								className={({ isActive }) =>
									isActive
										? "navbar__link navbar__inventory navbar__inventory--active"
										: "navbar__link navbar__inventory"
								}
							>
								Inventory
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
