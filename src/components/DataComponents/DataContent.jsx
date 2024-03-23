import React, { useRef } from "react";
import DataTable from "./DataTable";
import { Layout, Flex } from "antd";
const { Content } = Layout;
const { useState, useEffect } = React;
import DataSelectorAgg from "./DataSelectorAgg";
import DataSelectorBasic from "./DataSelectorBasic";
import DataSelectorCross from "./DataSelectorCross";
import getTableData from "./../../utils/getTableData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const getDataSelector = (isData, isAggregation, isCross) => {
	if (isData) {
		return DataSelectorBasic;
	}
	if (isAggregation) {
		return DataSelectorAgg;
	}
	if (isCross) {
		return DataSelectorCross;
	}
};

const DataContent = () => {
	const [menuData, setMenuData] = useState(null);

	const ref = useRef(null);

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

	const {
		gameStage,
		aggregationType,
		aggregationComparison,
		ccompPosition,
		ccompType,
		comparison,
		flat,
	} = useSelector((state) => state.settings);

	const DataSelector = getDataSelector(isData, isAggregation, isCross);
	useEffect(() => {
		if (isLoaded) {
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
				comparison,
				flat,
			});

			axios.get(link, params).then((res) => {
				setMenuData(res.data);
			});
		}
	}, [
		leagueMenuSelected,
		leagueGameSelected,
		submenuSelected,
		menuSelected,
		submenuComparisonSelected,
		totalFieldsSelected,
		windowFieldsSelected,
		gameStage,
		aggregationType,
		aggregationComparison,
		ccompPosition,
		ccompType,
		comparison,
		flat,
		isLoaded,
	]);

	return (
		isLoaded && (
			<Content style={{ margin: "24px 16px 0" }} ref={ref}>
				<Flex vertical={true} gap={"middle"}>
					<DataSelector />
					{menuData && <DataTable tableData={menuData} parentRef={ref} />}
				</Flex>
			</Content>
		)
	);
};

export default DataContent;
