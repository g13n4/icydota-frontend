const redirectBuilder = (leagueId, gameId, mode, isComparison, category) => {
	const comparisonPostfix = isComparison ? "-comparison" : "";

	return `/${leagueId}/${gameId}/${mode}${comparisonPostfix}/${category}/`;
};

export default redirectBuilder;
