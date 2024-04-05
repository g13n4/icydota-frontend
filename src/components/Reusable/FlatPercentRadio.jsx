import React from "react";
import { Radio } from "antd";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";

const getFlatPercent = () => {
	return [
		{
			label: "Flat",
			value: "flat",
		},
		{
			label: "Percent",
			value: "percent",
		},
	];
};

const FlatPercentRadio = () => {
	const flatRadioData = getFlatPercent();
	const dispatch = useDispatch();

	const { flat } = useSelector((state) => state.settings);

	return (
		<Radio.Group
			className="flat-radio settings-radio"
			options={flatRadioData}
			onChange={(e) => {
				dispatch(updateSettings("flat", e.target.value === "flat"));
			}}
			value={flat ? "flat" : "percent"}
			optionType="button"
			buttonStyle="solid"
		/>
	);
};

export default FlatPercentRadio;
