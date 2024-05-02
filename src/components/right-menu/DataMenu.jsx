import React from "react";

import MenuItem from "./MenuItem";

const menuItems = [
	{
		key: "data",
		label: "data",
		text: "Data",
		tooltip: "Tournament data by match",
	},
	{
		key: "aggregation",
		label: "aggregation",
		text: "Aggregation",
		tooltip: "Aggregated tournament data",
	},
	{
		key: "cross-comparison",
		label: "cross",
		text: "Comparison",
		tooltip: "Tournament player data compared to each other",
	},
];

const DataMenu = ({ menuData, menuDataSetter }) => {
	const changeDataMenu = (dataName) => {
		menuDataSetter((prevState) => ({
			...prevState,
			mode: dataName,
			changed: true,
		}));
	};

	return (
		<nav className="h-[111px]">
			<ul className="dui-menu p-0.5 ">
				{menuItems.map((item, idx) => {
					return (
						<MenuItem
							key={item.key}
							label={item.label}
							isSelected={item.label === menuData.mode}
							itemText={item.text}
							itemTooltip={item.tooltip}
							iconSize={20}
							onClick={() => changeDataMenu(item.label)}
						/>
					);
				})}
			</ul>
		</nav>
	);
};

export default DataMenu;
