import React from "react";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import CustomRadioGroup from "./CustomRadioGroup";

const flatPercent = [
	{
		label: "Flat",
		tooltip: "Substract comparing values",
		id: "flat",
	},
	{
		label: "Percent",
		tooltip: "Divide comparing values",
		id: "percent",
	},
];

const FlatPercentRadio = ({ className }) => {
	const dispatch = useDispatch();

	const { flat } = useSelector((state) => state.settings);

	const onChange = (value) => {
		dispatch(updateSettings("flat", value));
	};
	return (
		<CustomRadioGroup
			data={flatPercent}
			stateCheckedName={flat}
			onChange={onChange}
			className={`order-3 xl:col-start-3 xl:col-end-3 ${className}`}
		/>
	);
};

export default FlatPercentRadio;
