import { configureStore } from "@reduxjs/toolkit";
import { menuStateReducer } from "./menuReducer";
import { settingsReducer } from "./settingsReducer";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        menu: menuStateReducer,
    },
});
