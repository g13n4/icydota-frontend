import React from "react";
import DataTable from "./DataTable";
import { Layout, Flex } from "antd";
const { useState, useEffect } = React;
import DataSelector from "./DataSelector";
import getTableData from "./../../utils/getTableData";
import { useSelector } from "react-redux";
import axios from "axios";
import DataTableState from "./DataTableState";

const { Content } = Layout;

const DataContent = () => {
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
			<Content
				id="dota-data-table"
				style={{
					margin: "5px 16px 0",
					padding: "0 1% 2% 1%",
					minHeight: "75vh",
				}}
			>
				<Flex vertical={true} gap={"middle"}>
					<DataSelector
						isData={isData}
						isAggregation={isAggregation}
						isCross={isCross}
					/>
					{!(menuData instanceof Error) ? (
						menuData.loading ? (
							<DataTableState
								darkTheme={darkTheme}
								loading={menuData.loading}
							/>
						) : (
							menuData && <DataTable tableData={menuData} />
						)
					) : (
						<DataTableState darkTheme={darkTheme} loading={false} />
					)}
				</Flex>
			</Content>
		)
	);
};

export default DataContent;
