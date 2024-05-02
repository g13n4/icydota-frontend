import React from "react";
import { SheetComponent } from "@antv/s2-react";
import { setLang } from "@antv/s2";
import { useSelector } from "react-redux";
setLang("en_US");

import "@antv/s2/dist/style.min.css"; // used to create tooltips

const getColours = (isDarkTheme) => {
	if (isDarkTheme) {
		return [
			"rgba(226, 124, 124, 0.75)",
			"rgba(168, 100, 100, 0.75)",
			"rgba(109, 75, 75, 0.75)",
			"rgba(80, 63, 63, 0.75)",
			"rgba(51, 51, 51, 0.75)",
			"rgba(60, 78, 75, 0.75)",
			"rgba(69, 102, 97, 0.75)",
			"rgba(70, 105, 100, 0.75)",
			"rgba(89, 158, 148, 0.75)",
			"rgba(108, 212, 197, 0.75)",
		];
	}

	return [
		"rgba(17, 95, 154, 0.75)",
		"rgba(25, 132, 197, 0.75)",
		"rgba(34, 167, 240, 0.75)",
		"rgba(72, 181, 196, 0.75)",
		"rgba(118, 198, 143, 0.75)",
		"rgba(166, 215, 91, 0.75)",
		"rgba(201, 229, 47, 0.75)",
		"rgba(244, 241, 0, 0.75)",
		"rgba(225, 166, 146, 0.75)",
		"rgba(222, 110, 86, 0.75)",
		"rgba(194, 55, 40, 0.75)",
	];
};

const nanColour = "#a4a7a5d6";

const getTargetColor = (colours, value, min, max) => {
	if (Number.isNaN(Number(value))) {
		return nanColour;
	}
	if (min === max && value) {
		return colours[9];
	}

	const colourIndex = Math.floor(((value - min) / (max - min)) * 10);

	return colours[colourIndex];
};

const DataTable = ({ tableData, hoverHighlight }) => {
	const { darkTheme } = useSelector((state) => state.menu);

	const colours = getColours(darkTheme);

	const tableOptions = {
		width: 150,
		interaction: {
			selectedCellsSpotlight: false,
			hoverHighlight: hoverHighlight,
		},
		style: {
			layoutWidthType: "colAdaptive",
		},
		conditions: {
			background: tableData.table_values.map((item) => {
				return {
					field: item.col,
					mapping(value) {
						const cellColour = getTargetColor(
							colours,
							value,
							item.min,
							item.max,
						);

						return {
							fill: cellColour,
						};
					},
				};
			}),
		},
	};

	return (
		<SheetComponent
			dataCfg={tableData.table_data}
			options={{
				...tableOptions,
			}}
			adaptive={{
				width: true,
				height: false,
				getContainer: () => document.getElementById("dota-data-table"),
			}}
			sheetType="pivot"
			themeCfg={{
				name: darkTheme ? "dark" : "colorful",
			}}
		/>
	);
};

export default DataTable;
