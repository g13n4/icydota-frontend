import React from "react";
import ProcessedDataType from "./ProcessedDataType";
import DataProcessingType from "./DataProcessingType";
import { ShowButton, buttonTheme } from "./ShowButton";

import MenuResponse from "/menuResp.json";

const HideButton = ({ uiSetter }) => {
	return (
		<div className={`${buttonTheme} mb-[3px]`} onClick={() => uiSetter(false)}>
			<h1>HIDE</h1>
		</div>
	);
};

const RightMenu = ({ uistate, uiSetter }) => {
	console.log(uistate);
	return uistate ? (
		<aside
			className="fixed right-0 z-20 flex h-full w-[157px] px-[8px] py-[5px] 
		flex-col border-l bg-background"
		>
			<HideButton uiSetter={uiSetter} />
			<DataProcessingType />
			<ProcessedDataType data={MenuResponse.submenu} />
		</aside>
	) : (
		<ShowButton uiSetter={uiSetter} />
	);
};

export default RightMenu;
