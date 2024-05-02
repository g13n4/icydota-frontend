import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useParams } from "react-router-dom";
import DataMatchPreview from "../data-match-preview/DataMatchPreview";

const MainPageList = () => {
	const { league } = useParams();

	return (
		<div className="grid h-screen w-full">
			<div className="flex flex-col max-w-[100vw]">
				<Header selectedLeague={league} />
				<DataMatchPreview selectedLeague={league} />
			</div>
		</div>
	);
};

export default MainPageList;
