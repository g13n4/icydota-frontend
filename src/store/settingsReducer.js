import {
	UPDATE_AGGREGATION_TYPE,
	UPDATE_AGGREGATION_COMPARISON,
	UPDATE_CCOMP_POSITION,
	UPDATE_CCOMP_TYPE,
	UPDATE_COMPARISON,
	UPDATE_FLAT,
	UPDATE_GAME_STAGE,
	UPDATE_CCOMP_TOTAL_FIELD,
	UPDATE_CCOMP_WINDOW_FIELD,
} from "./settingsConstants";

const defaultSettings = {
	gameStage: "both",
	// aggregation
	aggregationType: "player",
	aggregationComparison: false,
	// cross comparison
	ccompPosition: "core",
	ccompType: "player",
	ccompTotalField: "total_gold",
	ccompWindowField: "l2",
	// comparison
	comparison: "player",
	flat: true,
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const settingsReducer = (state = defaultSettings, action) => {
	switch (action.type) {
		case UPDATE_AGGREGATION_TYPE:
			return { ...state, aggregationType: action.payload };
		case UPDATE_AGGREGATION_COMPARISON:
			return {
				...state,
				aggregationComparison: !state.aggregationComparison,
			};
		case UPDATE_CCOMP_POSITION:
			return { ...state, ccompPosition: action.payload };
		case UPDATE_CCOMP_TYPE:
			return { ...state, ccompType: action.payload };
		case UPDATE_CCOMP_TOTAL_FIELD:
			return { ...state, ccompTotalField: action.payload };
		case UPDATE_CCOMP_WINDOW_FIELD:
			return { ...state, ccompWindowField: action.payload };
		case UPDATE_COMPARISON:
			return { ...state, comparison: action.payload };
		case UPDATE_FLAT:
			return { ...state, flat: action.payload };
		case UPDATE_GAME_STAGE:
			return { ...state, gameStage: action.payload };
		default:
			return state;
	}
};

export const updateAggregationTypeAction = (payload) => ({
	type: UPDATE_AGGREGATION_TYPE,
	payload,
});

export const updateAggregationCompariosnAction = (payload) => ({
	type: UPDATE_AGGREGATION_COMPARISON,
	payload,
});

export const updateCCompPositionAction = (payload) => ({
	type: UPDATE_CCOMP_POSITION,
	payload,
});

export const updateCCompTypeAction = (payload) => ({
	type: UPDATE_CCOMP_TYPE,
	payload,
});

export const updateCCompWindowFieldAction = (payload) => ({
	type: UPDATE_CCOMP_WINDOW_FIELD,
	payload,
});

export const updateCCompTotalFieldAction = (payload) => ({
	type: UPDATE_CCOMP_TOTAL_FIELD,
	payload,
});

export const updateComparisonAction = (payload) => ({
	type: UPDATE_COMPARISON,
	payload,
});

export const updateFlatAction = (payload) => ({
	type: UPDATE_FLAT,
	payload,
});

export const updateGameStageAction = (payload) => ({
	type: UPDATE_GAME_STAGE,
	payload,
});
