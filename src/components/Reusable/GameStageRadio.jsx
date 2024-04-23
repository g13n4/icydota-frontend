import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../actions/settings";
const getGameStage = () => {
	return [
		{
			label: "Lane",
			value: "lane",
		},
		{
			label: "Game",
			value: "game",
		},
		{
			label: "Both",
			value: "both",
		},
	];
};

const GameStageRadio = () => {
	const gameStageData = getGameStage();

	const dispatch = useDispatch();

	const { gameStage } = useSelector((state) => state.settings);

	return (
		<Radio.Group
			className="game-stage-radio settings-radio"
			options={gameStageData}
			onChange={(e) => {
				dispatch(updateSettings("game_stage", e.target.value));
			}}
			value={gameStage}
			optionType="button"
			buttonStyle="solid"
		/>
	);
};

export default GameStageRadio;
