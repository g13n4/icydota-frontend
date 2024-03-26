import {
	updateAggregationTypeAction,
	updateAggregationCompariosnAction,
	updateCCompPositionAction,
	updateCCompTypeAction,
	updateCCompWindowFieldAction,
	updateCCompTotalFieldAction,
	updateComparisonAction,
	updateFlatAction,
	updateGameStageAction,
} from "./../store/settingsReducer";

export const updateSettings = (selectedKey, value) => {
	return (dispatch) => {
		switch (selectedKey) {
			case "aggregation_type": {
				dispatch(updateAggregationTypeAction(value));
				break;
			}
			case "aggregation_comparison": {
				dispatch(updateAggregationCompariosnAction());
				break;
			}
			case "ccomp_position": {
				dispatch(updateCCompPositionAction(value));
				break;
			}
			case "ccomp_type": {
				dispatch(updateCCompTypeAction(value));
				break;
			}
			case "ccomp_field_total": {
				dispatch(updateCCompTotalFieldAction(value));
				break;
			}
			case "ccomp_field_window": {
				dispatch(updateCCompWindowFieldAction(value));
				break;
			}
			case "comparison": {
				dispatch(updateComparisonAction(value));
				break;
			}
			case "flat": {
				dispatch(updateFlatAction(value));
				break;
			}
			case "game_stage": {
				dispatch(updateGameStageAction(value));
				break;
			}
		}
	};
};
