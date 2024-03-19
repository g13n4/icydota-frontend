import axios from "axios";
import BACKEND_ADDRESS from "../appSettings";
import { setMenu } from "./../store/menuReducer";

export const getMenu = () => {
    return (dispatch) => {
        axios.get(`${BACKEND_ADDRESS}/default_menu_data/`).then((res) => {
            dispatch(setMenu(res.data));
        });
    };
};
