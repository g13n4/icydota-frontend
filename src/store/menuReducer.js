import { SET_MENU, UPDATE_LEAGUE_GAMES } from "./menuConstants";

const defaultMenuState = {
    // league menu
    leagueMenu: [],
    leagueMenuSelected: [],
    leagueMenuDefault: [],
    // game selector menu
    leagueGames: [],
    leagueGamesSelected: [],
    leagueGamesDefault: [],
    // main catergory menu
    menu: [],
    menuSelected: [],
    menuDefault: [],
    // submenu
    submenuDefault: [],
    submenuSelected: [],
    submenu: [],
    // submenu comparison
    submenuComparison: [],
    submenuComparisonSelected: [],
    submenuComparisonDefault: [],
    // cross comparison fields
    totalFields: [],
    totalFieldsSelected: [],
    windowFields: [],
    windowFieldsSelected: [],
    loaded: false,
};

export const menuStateReducer = (state = defaultMenuState, action) => {
    switch (action.type) {
        case SET_MENU:
            return { ...state, ...action.payload };
        case UPDATE_LEAGUE_GAMES: {
            const lg = action.payload;

            return { ...state, leagueGames: lg, leagueGamesDefault: lg[0] };
        }
        default:
            return state;
    }
};

export const setMenu = (payload) => ({ type: SET_MENU, payload });
export const updateLeagueGames = (payload) => ({
    type: UPDATE_LEAGUE_GAMES,
    payload,
});
