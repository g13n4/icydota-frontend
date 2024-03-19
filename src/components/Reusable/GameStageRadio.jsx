import React from "react";
import { Radio } from "antd";

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

const GameStageRadio = ({ dataCategory, setDataCategory }) => {
    const gameStageData = getGameStage();

    return (
        <>
            <Radio.Group
                options={gameStageData}
                onChange={(e) => {
                    setDataCategory((prevState) => ({
                        ...prevState,
                        game_stage: e.target.value,
                    }));
                }}
                value={dataCategory.game_stage}
                optionType="button"
                buttonStyle="solid"
            />
        </>
    );
};

export default GameStageRadio;
