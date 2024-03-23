import { configureStore } from "@reduxjs/toolkit";
import { menuStateReducer } from "./menuReducer";
import { settingsReducer } from "./settingsReducer";
import { menuSelectedReducer } from "./menuSelectedReducer";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        menu: menuStateReducer,
        menuSelected: menuSelectedReducer,
    },
});
