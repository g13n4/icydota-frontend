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
			className="mb-5 

			w-full min-h-[30px] grid 
			xl:grid-flow-row xl:grid-cols-4 xl:grid-rows-1 xl:gap-1
			sm:grid-flow-col sm:grid-rows-4 sm:grid-cols-1 gap-2
			"
		/>
	);
};

export default DataSelector;
