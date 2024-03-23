import React from "react";
import { Flex, Radio } from "antd";
import "./../styles/DataSelector.css";
import GameStageRadio from "../Reusable/GameStageRadio";
import FlatPercentRadio from "../Reusable/FlatPercentRadio";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../actions/settings";

const getAggregationRadioData = () => {
	return [
		{
			label: "By Hero",
			value: "hero",
		},
		{
			label: "By Player",
			value: "player",
		},
		{
			label: "By Position",
			value: "position",
		},
	];
};

const DataSelectorAgg = () => {
	const aggregationRadioData = getAggregationRadioData();
	const dispatch = useDispatch();

	const { isComparison, submenuSelected } = useSelector(
		(state) => state.menuSelected,
	);
	const { aggregationType } = useSelector((state) => state.settings);

	return (
		<Flex className="data-selector">
			<Radio.Group
				options={aggregationRadioData}
				onChange={(e) => {
					dispatch(updateSettings("aggregation_type", e.target.value));
				}}
				value={aggregationType}
				optionType="button"
				buttonStyle="solid"
			/>
			{submenuSelected !== "total" && <GameStageRadio />}
			{isComparison && (
				<>
					<FlatPercentRadio />
				</>
			)}
		</Flex>
	);
};

export default DataSelectorAgg;
