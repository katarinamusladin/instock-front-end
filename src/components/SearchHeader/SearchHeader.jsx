import "./SearchHeader.scss";

function SearchHeader({title}) {
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
          <button className="warehouses__header-form-button">
            + Add New Warehouse
          </button>
        </form>
      </div>
    </div>
  );
}
export default SearchHeader;
