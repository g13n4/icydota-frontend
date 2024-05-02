import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { getMenu, changeTheme } from "./actions/menu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/routes/MainPage.jsx";
import "./index.css";
store.dispatch(getMenu());

// const themeData = [theme.compactAlgorithm];
// if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
// 	themeData.push(theme.darkAlgorithm);
// 	store.dispatch(changeTheme());
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<ConfigProvider
// 				locale={en_US}
// 				theme={{ algorithm: themeData, cssVar: true, hashed: false }}
// 			>
// 				<MainPage />
// 			</ConfigProvider>
// 		</Provider>
// 	</React.StrictMode>,
// );

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path=":league">
						<Route index element={<MainPage listPage={true} />} />
						<Route
							path=":gameId/:modeFull/:category"
							element={<MainPage listPage={false} />}
						/>
					</Route>
					<Route path="/*" element={<Navigate replace to="/16483" />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
