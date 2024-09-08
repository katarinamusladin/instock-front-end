import React from "react";
import "./AddInventoryButtons.scss";
import { Link } from "react-router-dom";

export default function AddInventoryButtons({ handleEditSubmit, btnText }) {
	return (
		<>
			<section className="clicker">
				<Link to="/">
					<button className="clicker__cancel">Cancel</button>
				</Link>
				<button
					className="clicker__add"
					type="submit"
					onClick={handleEditSubmit}
				>
					{btnText}
				</button>
			</section>
		</>
	);
}
