import React, { useState } from "react";
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import DataMatchPreview from "../data-match-preview-cards/DataMatchPreview";
import SettingsButton from "../settings-button/SettingsButton";

const MainPageList = () => {
	const { league } = useParams();

	return (
		<div className="grid h-screen w-full">
			<div className="flex flex-col max-w-[100vw]">
				<Header selectedLeague={league} />
				<SettingsButton tableView={false} />
				<DataMatchPreview selectedLeague={league} />
			</div>
		</div>
	);
};

export default MainPageList;
