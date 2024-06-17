import React, { useEffect, useState } from "react";

import RightMenu from "../right-menu/RightMenu";
import Header from "../header/Header";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import DataContent from "../DataComponents/DataContent";
import { useSelector } from "react-redux";
import redirectBuilder from "../../utils/redirectBuilder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataSelector from "../DataComponents/DataSelector";
import SettingsButton from "../settings-button/SettingsButton";
import { Settings } from "lucide-react";
import DataCardHeader from "../DataComponents/DataCardHeader";

const allModes = {
	data: ["data", false],
	"data-comparison": ["data", true],

	aggregation: ["aggregation", false],
	"aggregation-comparison": ["aggregation", true],

	"cross-comparison": ["cross", true],
	cross: ["cross", true],
};

const MainPageData = () => {
	const { league, gameId, modeFull, category } = useParams();

	if (allModes[modeFull] === undefined) {
		return <Navigate replace to="/" />;
	}

	const [mode, isComparison] = allModes[modeFull];
	// gathering data for menu
	const { submenuParent, categoriesDict } = useSelector((state) => state.menu);
	const navigate = useNavigate();
	const [uiShow, setuiShow] = useState(true);
	const [menuData, setMenuData] = useState({
		leagueId: league,
		gameId: gameId,
		modeFull: modeFull,
		mode: mode,
		isComparison: isComparison,
		category: Number.parseInt(category),
		categoryParent: submenuParent[category],
		changed: false,
	});

	useEffect(() => {
		if (menuData.changed) {
			const redirectLink = redirectBuilder(
				menuData.leagueId,
				menuData.gameId,
				menuData.mode,
				menuData.isComparison,
				menuData.category,
			);

			// updating state in this effect because we don't remount it
			setMenuData((prevState) => ({
				...prevState,
				changed: false,
			}));

			navigate(redirectLink);
		}
	}, [
		menuData.changed,
		menuData.leagueId,
		menuData.gameId,
		menuData.mode,
		menuData.isComparison,
		menuData.category,
		navigate,
	]);

	return (
		<div className="grid h-screen w-full">
			<RightMenu
				uistate={uiShow}
				uiSetter={setuiShow}
				menuData={menuData}
				menuDataSetter={setMenuData}
			/>

			<div
				className={`flex flex-col ${
					uiShow ? "max-w-[calc(100vw-157px)]" : "w-full"
				} bg-background`}
			>
				{uiShow && <Header selectedLeague={league} sticky={false} />}
				<SettingsButton tableView={true} />
				<Card className="mx-7 my-5 rounded-none text-center">
					<DataCardHeader
						headerText={categoriesDict[menuData.category]}
						iconSize={36}
						leagueId={league}
					/>
					<CardContent>
						<DataSelector menuData={menuData} />
						<DataContent
							leagueId={menuData.leagueId}
							gameId={menuData.gameId}
							mode={menuData.mode}
							isComparison={menuData.isComparison}
							category={menuData.category}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default MainPageData;
