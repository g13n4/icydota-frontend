import { isMobile } from "react-device-detect";
import {
	SET_DEFAULT_MENU,
	UPDATE_LEAGUE_GAMES,
	SET_DEFAULT_MENU_FIELDS,
	CHANGE_DEFAULT_THEME_BOOL,
	CHANGE_DEFAULT_THEME_STR,
	CHANGE_TABLE_VERTICAL,
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

	tableVertical: false,
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

const setTheme = ({ themeStr = "system", setDark = null }) => {
	const root = window.document.documentElement;

	root.classList.remove("light", "dark");

	if (setDark !== null) {
		const systemTheme = setDark ? "dark" : "light";
		root.classList.add(systemTheme);
		return setDark;
	}

	if (themeStr === "system") {
		const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";

		root.classList.add(systemTheme);
		return systemTheme === "dark" ? true : false;
	}

	root.classList.add(themeStr);
	return themeStr === "dark" ? true : false;
};

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export const menuStateReducer = (state = defaultMenuState, action) => {
	switch (action.type) {
		case SET_DEFAULT_MENU: {
			// setting up dark theme
			const systemTheme = setTheme({});
			return {
				...state,
				...action.payload,
				darkTheme: systemTheme,
				tableVertical: isMobile,
			};
		}
		case CHANGE_DEFAULT_THEME_BOOL:
			return { ...state, darkTheme: setTheme({ setDark: !state.darkTheme }) };

		case CHANGE_DEFAULT_THEME_STR:
			return { ...state, darkTheme: setTheme({ themeStr: action.payload }) };

		case CHANGE_TABLE_VERTICAL:
			return { ...state, tableVertical: !state.tableVertical };

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

export const changeDefaultThemeBoolAction = (payload) => ({
	type: CHANGE_DEFAULT_THEME_BOOL,
	payload,
});

export const changeTableVerticalAction = (payload) => ({
	type: CHANGE_TABLE_VERTICAL,
	payload,
});
