import React, { useRef, useState, useEffect } from "react";
import { Flex, Cascader } from "antd";
import "./../styles/DataSelector.css";
import ComparisonRadio from "../Reusable/ComparisonRadio";
import GameStageRadio from "../Reusable/GameStageRadio";
import { useDispatch, useSelector } from "react-redux";
import { setLeagueGameSelectedAction } from "../../store/menuSelectedReducer";
import "../styles/SettingButtons.css";

const DataSelectorBasic = () => {
	const dispatch = useDispatch();

	const { leagueGames, leagueGamesDefault } = useSelector(
		(state) => state.menu,
	);

	const { submenuSelected, isComparison, leagueGameSelected } = useSelector(
		(state) => state.menuSelected,
	);

	return (
		<>
			{leagueGamesDefault.length > 0 && (
				<Cascader
					defaultValue={[leagueGameSelected]}
					options={leagueGames}
					onChange={(e) => {
						dispatch(setLeagueGameSelectedAction(e[0]));
					}}
				/>
			)}
			{submenuSelected !== "total" && <GameStageRadio />}
			{isComparison && <ComparisonRadio />}
		</>
	);
};

export default DataSelectorBasic;
