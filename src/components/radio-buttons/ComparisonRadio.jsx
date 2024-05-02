import React from "react";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import CustomRadioGroup from "./CustomRadioGroup";

const comparisonRadioList = [
	{
		label: "To position average",
		tooltip: "Compare to the average value of enemy core/mid/support positions",
		id: "general",
	},
	{
		label: "To each other",
		tooltip: "Compare to the enemy of the same position",
		id: "player",
	},
];

const ComparisonRadio = () => {
	const dispatch = useDispatch();

	const { comparison } = useSelector((state) => state.settings);

	const onChange = (value) => {
		dispatch(updateSettings("comparison", value));
	};

	return (
		<CustomRadioGroup
			data={comparisonRadioList}
			stateCheckedName={comparison}
			onChange={onChange}
		/>
	);
};

export default ComparisonRadio;
