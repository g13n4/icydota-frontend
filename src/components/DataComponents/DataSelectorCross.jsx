import React, { useRef, useEffect } from "react";
import { Flex, Radio, Cascader } from "antd";
import "./../styles/DataSelector.css";
import FlatPercentRadio from "../Reusable/FlatPercentRadio";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import "../styles/SettingButtons.css";

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

	const { totalFields, windowFields } = useSelector((state) => state.menu);

	const {
		submenuComparisonSelected,
		totalFieldsSelected,
		windowFieldsSelected,
	} = useSelector((state) => state.menuSelected);

	const { ccompType, ccompPosition } = useSelector((state) => state.settings);

	const aggregationRadioData = getAggregationRadioData();
	const positionRadioData = getPositionRadioData();

	const isTotal = submenuComparisonSelected === "total";

	return (
		<Flex className="data-selector">
			{isTotal ? (
				<Cascader
					className="cascade-total"
					changeOnSelect={true}
					defaultValue={[totalFieldsSelected]}
					options={totalFields}
					onChange={(e) => {
						dispatch(updateSettings("ccomp_field_total", e[0]));
					}}
				/>
			) : (
				<>
					<Cascader
						className="window-total"
						changeOnSelect={true}
						defaultValue={[windowFieldsSelected]}
						options={windowFields}
						onChange={(e) => {
							dispatch(updateSettings("ccomp_field_window", e[0]));
						}}
					/>
				</>
			)}
			<FlatPercentRadio />
			<Radio.Group
				className="cross-aggregation-radio settings-radio"
				options={aggregationRadioData}
				onChange={(e) => {
					dispatch(updateSettings("ccomp_type", e.target.value));
				}}
				value={ccompType}
				optionType="button"
				buttonStyle="solid"
			/>
			<Radio.Group
				className="position-radio settings-radio"
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
