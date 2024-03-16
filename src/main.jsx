import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage.jsx";
import { ConfigProvider, theme } from "antd";
import en_US from "antd/locale/en_US.js";

const themeData = [theme.compactAlgorithm];
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    themeData.push(theme.darkAlgorithm);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                algorithm: themeData,
            }}
            locale={en_US}
        >
            <MainPage />
        </ConfigProvider>
    </React.StrictMode>
);
