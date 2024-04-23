import React, { useState } from "react";

import RightMenu from "../right-menu/RightMenu";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useParams } from "react-router-dom";
import DataMatchPreview from "../data-match-preview/DataMatchPreview";

const MainPage = () => {
	const { routeSelectedLeague, mode, category } = useParams();

	const [uiShow, setuiShow] = useState(true);

	if (mode && category) {
		return (
			<div className="grid h-screen w-full">
				<RightMenu uistate={uiShow} uiSetter={setuiShow} />

				<div className="flex flex-col max-w-[calc(100vw-165px)]">
					{uiShow ? <Header selectedLeague={routeSelectedLeague} /> : ""}
					{/* <Outlet uistate={true} /> */}
				</div>
				<Footer />
			</div>
		);
	}

	// list of games
	return (
		<div className="grid h-screen w-full">
			<div className="flex flex-col max-w-[100vw]">
				<Header selectedLeague={routeSelectedLeague} />
				<DataMatchPreview selectedLeague={routeSelectedLeague} />
			</div>
			<Footer />
		</div>
	);
};

export default MainPage;
