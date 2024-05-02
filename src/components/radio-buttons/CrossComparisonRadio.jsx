import React from "react";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import CustomRadioGroup from "./CustomRadioGroup";

const comparisonRadioData = [
	{
		label: "By Position / Hero",
		tooltip: "Show data aggregated by a position and a hero",
		id: "hero",
	},
	{
		label: "By Position / Player",
		tooltip: "Show data aggregated by a position and a player",
		id: "player",
	},
];

const CrossComparisonRadio = () => {
	const dispatch = useDispatch();

	const { ccompType } = useSelector((state) => state.settings);

	const onChange = (value) => {
		dispatch(updateSettings("ccomp_type", value));
	};

	return (
		<CustomRadioGroup
			data={comparisonRadioData}
			stateCheckedName={ccompType}
			onChange={onChange}
		/>
	);
};

export default CrossComparisonRadio;
