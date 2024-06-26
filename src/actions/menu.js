import axios from "axios";
import {
	setMenuAction,
	updateLeagueGamesAction,
	changeDefaultThemeBoolAction,
} from "./../store/menuReducer";
import { setLeagueGameSelectedAction } from "./../store/menuSelectedReducer";

export const getMenu = () => {
	return (dispatch) => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_ENDPOINT}/default_menu_data/`)
			.then((res) => {
				dispatch(setMenuAction(res.data)); // loading default menu
			});
	};
};

export const getLeagueGames = (leagueId) => {
	return (dispatch) => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_ENDPOINT}/games/${leagueId}`)
			.then((res) => {
				dispatch(updateLeagueGamesAction(res.data));
				dispatch(setLeagueGameSelectedAction(res.data[0].value.toString()));
			});
	};
};

export const changeThemeBool = (IsDarkTheme) => {
	return (dispatch) => {
		dispatch(changeDefaultThemeBoolAction(IsDarkTheme));
	};
};
