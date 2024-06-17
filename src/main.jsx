import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import { getMenu } from "./actions/menu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/routes/MainPage.jsx";
import "./index.css";

store.dispatch(getMenu());

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
					<Route path="/*" element={<Navigate replace to="/16669" />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
