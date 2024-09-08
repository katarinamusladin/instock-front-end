import "./EditWarehouseDetails.scss";
import errorIcon from "../../assets/images/icons/error-24px.svg";

export default function EditWarehouseDetails({
	header,
	labels,
	details,
	handleInputChange,
	formErrors,
}) {
	return (
		<section className="edit-warehouse-details">
			<h2>{header}</h2>
			{details.map(([key, value], index) => (
				<div key={index}>
					<label className="edit-warehouse-details__label" htmlFor={key}>
						<h3>
							{Object.keys(labels).find((label) => labels[label] === key)}
						</h3>
						<input
							className={`edit-warehouse-details__input ${
								formErrors[key] ? "edit-warehouse-details__input--error" : ""
							}`}
							type="text"
							name={key}
							id={key}
							placeholder={value}
							value={value}
							onChange={handleInputChange}
						/>
						{formErrors[key] && (
							<span className="edit-warehouse-details__error">
								<img src={errorIcon} alt="error" />
								{formErrors[key]}
							</span>
						)}
					</label>
				</div>
			))}
		</section>
	);
}
