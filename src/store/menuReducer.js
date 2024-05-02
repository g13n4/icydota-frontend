import {
	SET_DEFAULT_MENU,
	UPDATE_LEAGUE_GAMES,
	SET_DEFAULT_MENU_FIELDS,
	CHANGE_DEFAULT_THEME,
} from "./menuConstants";

const defaultMenuState = {
	// league menu
	leagueMenu: [],
	submenu: [],
	submenuParent: {},
	// submenu name fields
	totalFields: [],

	windowLaneFields: [],
	windowGameFields: [],
	categoriesDict: {},

	darkTheme: false,
	lastEditDate: "",
	appVersion: "",
	isLoaded: false,
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
		case SET_DEFAULT_MENU: {
			// setting up dark theme
			const root = window.document.documentElement;
			const systemTheme = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;

			return { ...state, ...action.payload, darkTheme: systemTheme };
		}
		case CHANGE_DEFAULT_THEME:
			return { ...state, darkTheme: !state.darkTheme };

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
