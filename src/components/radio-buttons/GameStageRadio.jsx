import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../../actions/settings";
import CustomRadioGroup from "./CustomRadioGroup";

const gameStageList = [
	{
		label: "Lane",
		tooltip:
			"Data collected from the start of the game to minute 10 (~2 minute slices)",
		id: "lane",
	},
	{
		label: "Game",
		tooltip:
			"Data collected from the start of the game until the end (~15 minute slices)",
		id: "game",
	},
	{
		label: "Both",
		tooltip:
			"Data collected from the start the game to minute 10 and from the start of the game until the end",
		id: "both",
	},
];

const GameStageRadio = () => {
	const dispatch = useDispatch();

	const onChange = (value) => {
		dispatch(updateSettings("game_stage", value));
	};
	const { gameStage } = useSelector((state) => state.settings);

	return (
		<CustomRadioGroup
			data={gameStageList}
			stateCheckedName={gameStage}
			onChange={onChange}
			className="order-first xl:col-start-1 xl:col-end-1  xl:justify-self-start"
		/>
	);
};

export default GameStageRadio;
