import React, { useEffect, useRef, useState } from "react";
import { SheetComponent } from "@antv/s2-react";
import { setLang } from "@antv/s2";
import { useSelector } from "react-redux";
setLang("en_US");

import "@antv/s2/dist/style.min.css"; // used to create tooltips

const getColours = (isDarkTheme) => {
	if (isDarkTheme) {
		return [
			"#e27c7c",
			"#a86464",
			"#6d4b4b",
			"#503f3f",
			"#333333",
			"#3c4e4b",
			"#456661",
			"#466964",
			"#599e94",
			"#6cd4c5",
		];
	}

	return [
		"#115f9a",
		"#1984c5",
		"#22a7f0",
		"#48b5c4",
		"#76c68f",
		"#a6d75b",
		"#c9e52f",
		"#f4f100",
		"#e1a692",
		"#de6e56",
		"#c23728",
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

const DataTable = ({ tableData }) => {
	const { menuSelected } = useSelector((state) => state.menuSelected);

	const { darkTheme } = useSelector((state) => state.menu);

	const colours = getColours(darkTheme);

	const tableOptions = {
		width: 280,
		interaction: {
			selectedCellsSpotlight: false,
			hoverHighlight: menuSelected === "cross_comparison" ? true : false,
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
