import React from "react";
import DataSelectorAgg from "./DataSelectorAgg";
import DataSelectorBasic from "./DataSelectorBasic";
import DataSelectorCross from "./DataSelectorCross";

const getDataSelector = (menuMode) => {
	if (menuMode === "cross") {
		return DataSelectorCross;
	}

	if (menuMode === "data") {
		return DataSelectorBasic;
	}

	return DataSelectorAgg;
};

const DataSelector = ({ menuData }) => {
	const PickedDataSelector = getDataSelector(menuData.mode);

	return (
		<PickedDataSelector
			menuData={menuData}
			className="mb-5 w-full h-[30px] grid grid-flow-col grid-cols-4"
		/>
	);
};

export default DataSelector;
