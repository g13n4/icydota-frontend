import React from "react";
import { Flex, Radio } from "antd";
import FlatPercentRadio from "./FlatPercentRadio";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";

const getComparisonRadioData = () => {
	return [
		{
			label: "To position average",
			value: "general",
		},
		{
			label: "To each other",
			value: "player",
		},
	];
};

const ComparisonRadio = () => {
	const dispatch = useDispatch();

	const { comparison } = useSelector((state) => state.settings);

	const comparisonRadioData = getComparisonRadioData();

	return (
		<Flex gap={"large"}>
			<FlatPercentRadio />
			<Radio.Group
				className="comparison-radio settings-radio"
				options={comparisonRadioData}
				onChange={(e) => {
					dispatch(updateSettings("comparison", e.target.value));
				}}
				value={comparison}
				optionType="button"
				buttonStyle="solid"
			/>
		</Flex>
	);
};

export default ComparisonRadio;
