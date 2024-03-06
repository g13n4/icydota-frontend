import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage.jsx";
import { ConfigProvider } from "antd";
import en_US from "antd/locale/en_US.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider locale={en_US}>
            <MainPage />
        </ConfigProvider>
    </React.StrictMode>
);
