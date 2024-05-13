import React from "react";
import DataTable from "../../not-tailwind-components/DataTable";
const { useState, useEffect } = React;
import getDataLink from "../../utils/getDataLink";
import { useSelector } from "react-redux";
import axios from "axios";
import DataTableState from "./DataTableState";

const DataContent = ({ leagueId, gameId, mode, isComparison, category }) => {
	const [tableData, setTableData] = useState({
		loading: true,
		data: [],
		error: null,
	});

	const { darkTheme, tableVertical } = useSelector((state) => state.menu);

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
		setTableData({ loading: true, data: [], error: null });
		const [link, params] = getDataLink({
			leagueId,
			gameId,
			mode,
			isComparison,
			category,
			// settings
			gameStage,
			aggregationType,
			aggregationComparison,
			ccompTotalField,
			ccompWindowField,
			ccompPosition,
			ccompType,
			comparison,
			flat,
			vertical: tableVertical,
		});

		axios
			.get(link, params)
			.then((res) => {
				setTableData({ loading: false, data: res.data, error: null });
			})
			.catch((error) =>
				setTableData({ error: error, loading: false, data: [] }),
			);
	}, [
		leagueId,
		gameId,
		mode,
		isComparison,
		category,
		gameStage,
		aggregationType,
		aggregationComparison,
		ccompPosition,
		ccompType,
		comparison,
		flat,
		ccompTotalField,
		ccompWindowField,
		tableVertical,
	]);

	if (tableData.loading) {
		return <DataTableState darkTheme={darkTheme} loading={tableData.loading} />;
	}

	if (tableData.error instanceof Error) {
		return <DataTableState darkTheme={darkTheme} loading={false} />;
	}

	return (
		tableData.data && (
			<DataTable tableData={tableData.data} isVertical={tableVertical} />
		)
	);
};

export default DataContent;
