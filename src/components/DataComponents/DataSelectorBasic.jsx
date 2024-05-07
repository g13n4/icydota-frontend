import React, { useRef, useState, useEffect } from "react";
import ComparisonRadio from "../radio-buttons/ComparisonRadio";
import GameStageRadio from "../radio-buttons/GameStageRadio";
import FlatPercentRadio from "../radio-buttons/FlatPercentRadio";

const DataSelectorBasic = ({ menuData, ...props }) => {
	if (menuData.category === 0 && !menuData.isComparison) {
		return (
			<div {...props}>
				<span>&nbsp;</span>
			</div>
		);
	}

	return (
		<div {...props}>
			{menuData.category !== 0 && <GameStageRadio />}
			{menuData.isComparison && <ComparisonRadio />}
			{menuData.isComparison && <FlatPercentRadio />}
		</div>
	);
};

export default DataSelectorBasic;
