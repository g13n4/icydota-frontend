import React, { useEffect, useState } from "react";

import RightMenu from "../right-menu/RightMenu";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import DataContent from "../DataComponents/DataContent";
import { useSelector } from "react-redux";
import redirectBuilder from "../../utils/redirectBuilder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataSelector from "../DataComponents/DataSelector";

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
		return <Navigate replace to="/16483" />;
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
				{uiShow && <Header selectedLeague={league} />}
				<Card className="mx-7 my-5 rounded-none">
					<CardHeader>
						<CardTitle className="text-center">
							{categoriesDict[menuData.category]}
						</CardTitle>
					</CardHeader>
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
