import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

const PerformanceSubmenuName = () => {
	const { darkTheme, categoriesDict } = useSelector((state) => state.menu);

	const { menuSelected, submenuSelected, submenuComparisonSelected } =
		useSelector((state) => state.menuSelected);

	const submenuText =
		menuSelected === "data"
			? categoriesDict[submenuSelected]
			: categoriesDict[submenuComparisonSelected];

	return (
		<Title
			level={2}
			style={{
				color: darkTheme ? "white" : "black",
				textAlign: "center",
				paddingTop: "0.25em",
				margin: "0px",
			}}
		>
			{submenuText}
		</Title>
	);
};

export default PerformanceSubmenuName;
