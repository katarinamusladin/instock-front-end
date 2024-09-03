import "./Header.scss";
import Logo from "../../assets/images/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo-container">
          <a href="#">
            <img src={Logo} className="navbar__img" alt="Instock" />
          </a>
        </div>
        <div className="navbar__links">
          <ul className="navbar__list">
            <li>
              <a href="#" className="navbar__link navbar__warehouses">
                Warehouses
              </a>
            </li>
            <li>
              <a href="#" className="navbar__link navbar__inventory">
                Inventory
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
