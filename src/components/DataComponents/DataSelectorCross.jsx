import React, { useState, useEffect } from "react";
import { Flex, Radio, Cascader } from "antd";
import "./../styles/DataSelector.css";
import FlatPercentRadio from "../Reusable/FlatPercentRadio";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";

const getAggregationRadioData = () => {
	return [
		{
			label: "By Position and Hero",
			value: "hero",
		},
		{
			label: "By Position and Player",
			value: "player",
		},
	];
};

const getPositionRadioData = () => {
	return [
		{
			label: "Core",
			value: "core",
		},
		{
			label: "Mid",
			value: "mid",
		},
		{
			label: "Support",
			value: "support",
		},
	];
};

const DataSelectorCross = () => {
	const dispatch = useDispatch();

	const { totalFields, totalFieldsDefault, windowFields, windowFieldsDefault } =
		useSelector((state) => state.menu);

	const { submenuSelected } = useSelector((state) => state.menuSelected);

	const { ccompType, ccompPosition } = useSelector((state) => state.settings);

	const aggregationRadioData = getAggregationRadioData();
	const positionRadioData = getPositionRadioData();

	return (
		<Flex className="data-selector">
			<Cascader
				defaultValue={[
					submenuSelected === "total"
						? totalFieldsDefault
						: windowFieldsDefault,
				]}
				options={submenuSelected === "total" ? totalFields : windowFields}
				onChange={(e) => {
					dispatch(updateSettings("ccomp_field", e[0]));
				}}
			/>
			<FlatPercentRadio />
			<Radio.Group
				options={aggregationRadioData}
				onChange={(e) => {
					dispatch(updateSettings("ccomp_type", e.target.value));
				}}
				value={ccompType}
				optionType="button"
				buttonStyle="solid"
			/>
			<Radio.Group
				options={positionRadioData}
				onChange={(e) => {
					dispatch(updateSettings("ccomp_position", e.target.value));
				}}
				value={ccompPosition}
				optionType="button"
				buttonStyle="solid"
			/>
		</Flex>
	);
};

export default DataSelectorCross;
