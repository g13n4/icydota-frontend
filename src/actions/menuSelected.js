import {
	setMenuSelectedAction,
	setLeagueSelectedAction,
	setSubmenuSelectedAction,
	setLeagueGameSelectedAction,
	setSubMenuComparisonSelectedAction,
	setTotalFieldSelectedAction,
	setWindowFieldSelectedAction,
	SetBoolStatusAction,
	SetMenuSelectedIsLoadedAction,
} from "./../store/menuSelectedReducer";
import { getLeagueGames } from "./menu";

export const setSelected = (selectedKey, value) => {
	return (dispatch) => {
		switch (selectedKey) {
			case "menu": {
				dispatch(setMenuSelectedAction(value));
				dispatch(SetBoolStatusAction());
				break;
			}
			case "league": {
				dispatch(setLeagueSelectedAction(value));
				dispatch(getLeagueGames(value));
				break;
			}
			case "league_game": {
				dispatch(setLeagueGameSelectedAction(value));
				break;
			}
			case "submenu": {
				dispatch(setSubmenuSelectedAction(value));
				break;
			}
			case "submenu_comparison": {
				dispatch(setSubMenuComparisonSelectedAction(value));
				break;
			}
			case "total": {
				dispatch(setTotalFieldSelectedAction(value));
				break;
			}
			case "window": {
				dispatch(setWindowFieldSelectedAction(value));
				break;
			}
			case "loaded": {
				dispatch(SetMenuSelectedIsLoadedAction());
				break;
			}
		}
	};
};
