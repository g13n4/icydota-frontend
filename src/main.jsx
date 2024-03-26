import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./components/MainPage.jsx";
import { ConfigProvider, theme } from "antd";
import en_US from "antd/locale/en_US.js";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { getMenu, changeTheme } from "./actions/menu";

store.dispatch(getMenu());

const themeData = [theme.compactAlgorithm];
if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
	themeData.push(theme.darkAlgorithm);
	store.dispatch(changeTheme());
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider locale={en_US} theme={{ algorithm: themeData }}>
				<MainPage />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
);
