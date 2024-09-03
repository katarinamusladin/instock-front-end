import './Header.scss';
import Logo from '../../assets/images/Logo/InStock-Logo.svg';

function Header(){
  return (
    <div className="navbar">
    <div className="navbar__container">
      <div className="navbar__logo-container">
        <div className="navbar__link">
          <img src={Logo} className="navbar__img" alt="Instock" />
        </div>
      </div>
      <div className="navbar__links">
        <ul className="navbar__list">
          <li className="navbar__link navbar__warehouses">Warehouses</li>
          <li className="navbar__link navbar__inventory">Inventory</li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Header;