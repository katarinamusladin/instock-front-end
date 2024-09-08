import { useState, useEffect } from "react";

//used so that the input fields of the form don't activating the onChange with every key press!
export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			// Clean up the timeout
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};
