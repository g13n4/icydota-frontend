import React from "react";
import { div, Radio } from "antd";
import "./../styles/DataSelector.css";
import "../styles/SettingButtons.css";
import DataSelectorAgg from "./DataSelectorAgg";
import DataSelectorBasic from "./DataSelectorBasic";
import DataSelectorCross from "./DataSelectorCross";

const getDataSelector = (isData, isAggregation, isCross) => {
	if (isData) {
		return DataSelectorBasic;
	}
	if (isAggregation) {
		return DataSelectorAgg;
	}
	if (isCross) {
		return DataSelectorCross;
	}
};

const DataSelector = ({ isData, isAggregation, isCross }) => {
	const PickedDataSelector = getDataSelector(isData, isAggregation, isCross);

	return (
		<div className="data-selector">
			<PickedDataSelector />
		</div>
	);
};

export default DataSelector;
