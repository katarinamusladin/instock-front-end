import "./SearchHeader.scss";
import { Link } from "react-router-dom";

function SearchHeader({title, type, addPath}) {
  return (
    <div className="warehouses__header">
      <h1 className="warehouses__header-title">{title}</h1>
      <div className="warehouses__header-container">
        <form className="warehouses__header-form">
          <input
            type="search"
            name="search"
            className="warehouses__header-form-search"
            placeholder="Search..."
          />
          <Link to={addPath}>
          <button className="warehouses__header-form-button">
            + Add New {type}
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default SearchHeader;
