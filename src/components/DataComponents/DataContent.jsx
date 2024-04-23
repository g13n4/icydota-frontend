import React from "react";
//import DataTable from "./DataTable";
const { useState, useEffect } = React;
//import DataSelector from "./DataSelector";
import getTableData from "./../../utils/getTableData";
import { useSelector } from "react-redux";
import axios from "axios";
import DataTableState from "./DataTableState";
import { useParams as useRouterParams } from "react-router-dom";

const DataContent = () => {
	const {
		routeSelectedLeague,
		mode = "data",
		category = "total",
	} = useRouterParams();

	const menuDataDefaut = { loading: true };
	const [menuData, setMenuData] = useState(menuDataDefaut);

	const {
		menuSelected,
		leagueMenuSelected,
		leagueGameSelected,
		submenuSelected,
		submenuComparisonSelected,
		totalFieldsSelected,
		windowFieldsSelected,
		isData,
		isComparison,
		isAggregation,
		isCross,
		isLoaded,
	} = useSelector((state) => state.menuSelected);

	const { darkTheme } = useSelector((state) => state.menu);

	const {
		gameStage,
		aggregationType,
		aggregationComparison,
		ccompTotalField,
		ccompWindowField,
		ccompPosition,
		ccompType,
		comparison,
		flat,
	} = useSelector((state) => state.settings);

	useEffect(() => {
		if (isLoaded) {
			setMenuData(menuDataDefaut);
			const [link, params] = getTableData({
				leagueMenuSelected,
				leagueGameSelected,
				submenuSelected,
				submenuComparisonSelected,
				totalFieldsSelected,
				windowFieldsSelected,
				isData,
				isComparison,
				isAggregation,
				isCross,
				gameStage,
				aggregationType,
				aggregationComparison,
				ccompPosition,
				ccompType,
				ccompTotalField,
				ccompWindowField,
				comparison,
				flat,
			});

			axios
				.get(link, params)
				.then((res) => {
					setMenuData(res.data);
				})
				.catch((error) => setMenuData(error));
		}
	}, [
		leagueMenuSelected,
		leagueGameSelected,
		submenuSelected,
		menuSelected,
		submenuComparisonSelected,
		gameStage,
		aggregationType,
		aggregationComparison,
		ccompPosition,
		ccompType,
		comparison,
		flat,
		isLoaded,
		ccompTotalField,
		ccompWindowField,
	]);

	return (
		isLoaded && (
			<div>
				{/* <DataSelector
					isData={isData}
					isAggregation={isAggregation}
					isCross={isCross}
				/> */}
				{!(menuData instanceof Error) ? (
					menuData.loading ? (
						<DataTableState darkTheme={darkTheme} loading={menuData.loading} />
					) : (
						<h1>{menuData}</h1>
						//menuData && <DataTable tableData={menuData} />
					)
				) : (
					<DataTableState darkTheme={darkTheme} loading={false} />
				)}
			</div>
		)
	);
};

export default DataContent;
