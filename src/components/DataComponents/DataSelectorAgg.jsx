import React from "react";
import GameStageRadio from "../radio-buttons/GameStageRadio";
import FlatPercentRadio from "../radio-buttons/FlatPercentRadio";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../actions/settings";
import CustomRadioGroup from "../radio-buttons/CustomRadioGroup";

const aggregationRadioData = [
	{
		label: "By Hero",
		tooltip: "Tournament data aggregated by hero",
		id: "hero",
	},
	{
		label: "By Player",
		tooltip: "Tournament data aggregated by player",
		id: "player",
	},
	{
		label: "By Position",
		tooltip: "Tournament data aggregated by position",
		id: "position",
	},
];

const DataSelectorAgg = ({ menuData, ...props }) => {
	const dispatch = useDispatch();

	const { aggregationType } = useSelector((state) => state.settings);

	const onChange = (value) => {
		dispatch(updateSettings("aggregation_type", value));
	};

	return (
		<div {...props}>
			<CustomRadioGroup
				data={aggregationRadioData}
				stateCheckedName={aggregationType}
				onChange={onChange}
				className="order-last xl:col-start-4 xl:justify-self-end"
			/>
			{menuData.category !== 0 && <GameStageRadio />}
			{menuData.isComparison && <FlatPercentRadio />}
		</div>
	);
};

export default DataSelectorAgg;
