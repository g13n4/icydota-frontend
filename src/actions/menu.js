import axios from "axios";
import BACKEND_ADDRESS from "../appSettings";
import {
	setMenuAction,
	setDefaultMenuFieldsAction,
	updateLeagueGamesAction,
	changeDefaultThemeAction,
} from "./../store/menuReducer";
import {
	setDefaultSelectedAction,
	setLeagueGameSelectedAction,
	SetBoolStatusAction,
	SetMenuSelectedIsLoadedAction,
} from "./../store/menuSelectedReducer";

export const getMenu = () => {
	return (dispatch, getState) => {
		axios.get(`${BACKEND_ADDRESS}/default_menu_data/`).then((res) => {
			dispatch(setMenuAction(res.data)); // loading default menu
			dispatch(setDefaultMenuFieldsAction()); // set default fields

			const state = getState();

			dispatch(setDefaultSelectedAction(state)); // getting selected fields from the menu
			dispatch(SetBoolStatusAction()); // Check how the status of bools has changed
			dispatch(SetMenuSelectedIsLoadedAction()); // Check how the status of bools has changed
		});
	};
};

export const getLeagueGames = (leagueId) => {
	return (dispatch) => {
		axios.get(`${BACKEND_ADDRESS}/games/${leagueId}`).then((res) => {
			dispatch(updateLeagueGamesAction(res.data));
			dispatch(setLeagueGameSelectedAction(res.data[0].value.toString()));
		});
	};
};

export const changeTheme = () => {
	return (dispatch) => {
		dispatch(changeDefaultThemeAction());
	};
};
