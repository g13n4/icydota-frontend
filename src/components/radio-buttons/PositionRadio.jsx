import React from "react";
import { updateSettings } from "../../actions/settings";
import { useDispatch, useSelector } from "react-redux";
import CustomRadioGroup from "./CustomRadioGroup";

const positionRadioData = [
	{
		label: "Core",
		id: "core",
	},
	{
		label: "Mid",
		id: "mid",
	},
	{
		label: "Support",
		id: "support",
	},
];

const PositionRadio = () => {
	const dispatch = useDispatch();

	const { ccompPosition } = useSelector((state) => state.settings);

	const onChange = (value) => {
		dispatch(updateSettings("ccomp_position", value));
	};

	return (
		<CustomRadioGroup
			data={positionRadioData}
			stateCheckedName={ccompPosition}
			onChange={onChange}
			className="order-4 col-start-4"
		/>
	);
};

export default PositionRadio;
