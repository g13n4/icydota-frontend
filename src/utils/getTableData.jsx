import BACKEND_ADDRESS from "../appSettings";

const getTableData = ({
	// menuSelected
	leagueMenuSelected,
	leagueGameSelected,
	submenuSelected,
	submenuComparisonSelected,
	isComparison,
	isAggregation,
	isCross,
	// settings
	gameStage,
	aggregationType,
	ccompPosition,
	ccompType,
	comparison,
	ccompTotalField,
	ccompWindowField,
	flat,
}) => {
	let link = BACKEND_ADDRESS;
	const ccompField =
		submenuComparisonSelected === "total" ? ccompTotalField : ccompWindowField;

	const params = {
		data_type: isComparison ? submenuComparisonSelected : submenuSelected,
		flat: flat,
	};

	if (isCross) {
		const dc = "performance_cross_comparison";
		link += `/${dc}/${leagueMenuSelected}/${ccompType}/${ccompPosition}/`;

		params.data_field = ccompField;
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
