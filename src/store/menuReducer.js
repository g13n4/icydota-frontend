import {
	SET_DEFAULT_MENU,
	UPDATE_LEAGUE_GAMES,
	SET_DEFAULT_MENU_FIELDS,
	CHANGE_DEFAULT_THEME,
} from "./menuConstants";

const defaultMenuState = {
	// league menu
	leagueMenu: [],
	leagueMenuDefault: [],
	// game selector menu
	leagueGames: [],
	leagueGamesDefault: [],
	// main catergory menu
	menu: [],
	menuDefault: [],
	// submenu
	submenuDefault: [],
	submenu: [],
	// submenu comparison
	submenuComparison: [],
	submenuComparisonDefault: [],
	// cross comparison fields
	totalFields: [],
	totalFieldsDefault: [],
	windowFields: [],
	windowFieldsDefault: [],
	darkTheme: false,
	loaded: false,
};

const toMenuDefaultField = (objs, value = false) => {
	if (value) {
		return objs[0].value.toString();
	}
	return objs[0].key.toString();
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const menuStateReducer = (state = defaultMenuState, action) => {
	switch (action.type) {
		case SET_DEFAULT_MENU:
			return { ...state, ...action.payload };
		case SET_DEFAULT_MENU_FIELDS:
			return {
				...state,
				leagueMenuDefault: toMenuDefaultField(state.leagueMenu),
				leagueGamesDefault: toMenuDefaultField(state.leagueGames, true),
				menuDefault: toMenuDefaultField(state.menu),
				submenuDefault: toMenuDefaultField(state.submenu),
				submenuComparisonDefault: toMenuDefaultField(state.submenuComparison),
				totalFieldsDefault: toMenuDefaultField(state.totalFields),
				windowFieldsDefault: toMenuDefaultField(state.windowFields),
			};

		case CHANGE_DEFAULT_THEME:
			return { ...state, darkTheme: !state.darkTheme };

		case UPDATE_LEAGUE_GAMES: {
			const lg = action.payload;

			return {
				...state,
				leagueGames: lg,
				leagueGamesDefault: toMenuDefaultField(lg, true),
			};
		}
		default:
			return state;
	}
};

export const setMenuAction = (payload) => ({ type: SET_DEFAULT_MENU, payload });
export const updateLeagueGamesAction = (payload) => ({
	type: UPDATE_LEAGUE_GAMES,
	payload,
});

export const setDefaultMenuFieldsAction = (payload) => ({
	type: SET_DEFAULT_MENU_FIELDS,
	payload,
});

export const changeDefaultThemeAction = (payload) => ({
	type: CHANGE_DEFAULT_THEME,
	payload,
});
