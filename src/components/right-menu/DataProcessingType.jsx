import React from "react";

import MenuItem from "./MenuItem";

const DataProcessingType = () => {
	const selectedMenu = "data";

	return (
		<nav className="border-b h-[111px]">
			<ul className="dui-menu p-0.5 ">
				<MenuItem
					key={"data"}
					label={"data"}
					selectedLabel={selectedMenu}
					elemText={"Data"}
					elemTooltip={"Tournament data by match"}
				/>
				<MenuItem
					key={"aggregation"}
					label={"aggregation"}
					selectedLabel={selectedMenu}
					elemText={"Aggregation"}
					selectedKey={selectedMenu}
					elemTooltip={"Aggregated tournament data"}
				/>
				<MenuItem
					key={"comparison"}
					label={"comparison"}
					selectedLabel={selectedMenu}
					elemText={"Comparison"}
					selectedKey={selectedMenu}
					elemTooltip={"Tournament player data compared to each other "}
				/>
			</ul>
		</nav>
	);
};

export default DataProcessingType;
