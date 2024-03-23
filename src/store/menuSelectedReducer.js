import {
	SET_MENU_SELECTED,
	SET_LEAGUE_GAME_SELECTED,
	SET_LEAGUE_SELECTED,
	SET_SUBMENU_SELECTED,
	SET_SUBMENU_COMPARISON_SELECTED,
	SET_TOTAL_FIELD_SELECTED,
	SET_WINDOW_FIELD_SELECTED,
	SET_DEFAULT_SELECTED,
	IS_COMPARISON,
	IS_DATA,
	IS_AGGREGATION,
	IS_CROSS,
	SET_BOOL_STATUS,
	MENU_SELECTED_IS_LOADED,
} from "./menuSelectedConstants";

const defaultSelected = {
	// selected
	leagueMenuSelected: [],
	leagueGameSelected: [],
	menuSelected: [],
	submenuSelected: [],
	submenuComparisonSelected: [],
	totalFieldsSelected: [],
	windowFieldsSelected: [],
	isData: true,
	isComparison: false,
	isAggregation: false,
	isCross: false,
	isLoaded: false,
};

const getBooleanData = ({ menuSelected }) => {
	return {
		isData: menuSelected.includes("data"),
		isComparison: menuSelected.includes("comparison"),
		isAggregation: menuSelected.includes("aggregation"),
		isCross: menuSelected.includes("cross"),
	};
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const menuSelectedReducer = (state = defaultSelected, action) => {
	switch (action.type) {
		case SET_DEFAULT_SELECTED: {
			const {
				leagueMenuDefault,
				menuDefault,
				submenuDefault,
				submenuComparisonDefault,
				totalFieldsDefault,
				windowFieldsDefault,
				leagueGamesDefault,
			} = action.payload.menu;

			return {
				...state,
				leagueMenuSelected: leagueMenuDefault,
				menuSelected: menuDefault,
				submenuSelected: submenuDefault,
				submenuComparisonSelected: submenuComparisonDefault,
				totalFieldsSelected: totalFieldsDefault,
				windowFieldsSelected: windowFieldsDefault,
				leagueGameSelected: leagueGamesDefault,
			};
		}

		case SET_MENU_SELECTED:
			return { ...state, menuSelected: action.payload };
		case SET_LEAGUE_GAME_SELECTED:
			return {
				...state,
				leagueGameSelected: action.payload,
			};
		case SET_SUBMENU_SELECTED:
			return { ...state, submenuSelected: action.payload };
		case SET_LEAGUE_SELECTED:
			return { ...state, leagueMenuSelected: action.payload };
		case SET_SUBMENU_COMPARISON_SELECTED:
			return { ...state, submenuComparisonSelected: action.payload };
		case SET_TOTAL_FIELD_SELECTED:
			return { ...state, totalFieldsSelected: action.payload };
		case SET_WINDOW_FIELD_SELECTED:
			return { ...state, windowFieldsSelected: action.payload };
		case IS_COMPARISON:
			return { ...state, isComparison: action.payload };
		case IS_DATA:
			return { ...state, isData: action.payload };
		case IS_AGGREGATION:
			return { ...state, isAggregation: action.payload };
		case IS_CROSS:
			return { ...state, isCross: action.payload };
		case MENU_SELECTED_IS_LOADED:
			return { ...state, isLoaded: true };
		case SET_BOOL_STATUS:
			return { ...state, ...getBooleanData(state) };

		default:
			return state;
	}
};

export const setDefaultSelectedAction = (payload) => ({
	type: SET_DEFAULT_SELECTED,
	payload,
});

export const setMenuSelectedAction = (payload) => ({
	type: SET_MENU_SELECTED,
	payload,
});

export const setLeagueSelectedAction = (payload) => ({
	type: SET_LEAGUE_SELECTED,
	payload,
});

export const setSubmenuSelectedAction = (payload) => ({
	type: SET_SUBMENU_SELECTED,
	payload,
});

export const setLeagueGameSelectedAction = (payload) => ({
	type: SET_LEAGUE_GAME_SELECTED,
	payload,
});

export const setSubMenuComparisonSelectedAction = (payload) => ({
	type: SET_SUBMENU_COMPARISON_SELECTED,
	payload,
});

export const setTotalFieldSelectedAction = (payload) => ({
	type: SET_TOTAL_FIELD_SELECTED,
	payload,
});

export const setWindowFieldSelectedAction = (payload) => ({
	type: SET_WINDOW_FIELD_SELECTED,
	payload,
});

export const IsComparisonAction = (payload) => ({
	type: IS_COMPARISON,
	payload,
});

export const IsDataAction = (payload) => ({
	type: IS_DATA,
	payload,
});

export const IsAggregationAction = (payload) => ({
	type: IS_AGGREGATION,
	payload,
});

export const IsCrossAction = (payload) => ({
	type: IS_CROSS,
	payload,
});

export const SetBoolStatusAction = (payload) => ({
	type: SET_BOOL_STATUS,
	payload,
});

export const SetMenuSelectedIsLoadedAction = (payload) => ({
	type: MENU_SELECTED_IS_LOADED,
	payload,
});
