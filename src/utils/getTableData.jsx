import BACKEND_ADDRESS from "../appSettings";

const getTableData = ({
	// menuSelected
	leagueMenuSelected,
	leagueGameSelected,
	submenuSelected,
	submenuComparisonSelected,
	totalFieldsSelected,
	windowFieldsSelected,
	isComparison,
	isAggregation,
	isCross,
	// settings
	gameStage,
	aggregationType,
	ccompPosition,
	ccompType,
	comparison,
	flat,
}) => {
	let link = BACKEND_ADDRESS;

	const params = {
		data_type: isComparison ? submenuComparisonSelected : submenuSelected,
		flat: flat,
	};

	if (isCross) {
		const dc = "performance_cross_comparison";
		link += `/${dc}/${leagueMenuSelected}/${ccompType}/${ccompPosition}/`;

		params.data_field =
			params.data_type === "total" ? totalFieldsSelected : windowFieldsSelected;
	} else {
		params.game_stage = gameStage;

		if (isAggregation) {
			const dc = "performance_aggregated_data";
			link += `/${dc}/${leagueMenuSelected}/${aggregationType}/`;
			if (isComparison) {
				params.comparison = "general";
			}
		} else {
			const dc = "performance_data";
			link += `/${dc}/${leagueGameSelected}/`;
			if (isComparison) {
				params.comparison = comparison;
			}
		}
	}

	return [link, { params: params }];
};

export default getTableData;
