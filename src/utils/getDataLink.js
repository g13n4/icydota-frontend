const getDataLink = ({
	// menuSelected
	leagueId,
	gameId,
	mode,
	isComparison,
	category,
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
	let link = import.meta.env.VITE_BACKEND_ENDPOINT;
	const ccompField = category === 0 ? ccompTotalField : ccompWindowField;

	const params = {
		data_type: category,
		flat: flat === "flat" ? true : false,
	};

	if (mode === "cross") {
		const dc = "performance_cross_comparison";
		link += `/${dc}/${leagueId}/${category}/${ccompType}/${ccompPosition}`;

		params.data_field = ccompField;
	} else {
		params.game_stage = gameStage;

		if (mode === "aggregation") {
			const dc = "performance_aggregated_data";
			link += `/${dc}/${leagueId}/${category}/${aggregationType}`;
			if (isComparison) {
				params.comparison = "general";
			}
		} else {
			const dc = "performance_data";
			link += `/${dc}/${gameId}/${category}`;
			if (isComparison) {
				params.comparison = comparison;
			}
		}
	}

	return [link, { params: params }];
};

export default getDataLink;
