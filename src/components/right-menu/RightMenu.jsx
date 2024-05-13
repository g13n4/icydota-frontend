import React from "react";
import { ShowButton, buttonTheme } from "./ShowButton";
import ComparisonButton from "./ComparisonButton";
import { useSelector } from "react-redux";
import DataSubmenu from "./DataSubmenu";
import DataMenu from "./DataMenu";

const HideButton = ({ uiSetter }) => {
	return (
		<div
			className={`${buttonTheme} mb-[3px]`}
			onClick={() => uiSetter(false)}
			onKeyDown={() => uiSetter(false)}
		>
			<h1>HIDE</h1>
		</div>
	);
};

const RightMenu = ({ uistate, uiSetter, menuData, menuDataSetter }) => {
	const { submenu } = useSelector((state) => state.menu);
	return uistate ? (
		<aside className="fixed right-0 z-20  h-full w-[157px] border-l bg-background">
			<div className="flex h-full px-[8px] py-[5px] flex-col">
				<HideButton uiSetter={uiSetter} />
				<DataMenu menuData={menuData} menuDataSetter={menuDataSetter} />
				<ComparisonButton menuData={menuData} menuDataSetter={menuDataSetter} />
				<DataSubmenu
					data={submenu}
					menuData={menuData}
					menuDataSetter={menuDataSetter}
				/>
			</div>
		</aside>
	) : (
		<ShowButton uiSetter={uiSetter} />
	);
};

export default RightMenu;
