import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Flex, Cascader } from "antd";
import "./../styles/DataSelector.css";
import ComparisonRadio from "../Reusable/ComparisonRadio";
import GameStageRadio from "../Reusable/GameStageRadio";

const DataSelectorBasic = ({ setDataCategory, dataCategory, leagueId }) => {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        if (leagueId) {
            axios.get(`http://127.0.0.1:8000/games/${leagueId}`).then((res) => {
                setGamesList(res.data);
                setDataCategory((prevState) => ({
                    ...prevState,
                    match_id: res.data[0].value,
                }));
            });
        }
    }, [leagueId]);

    return (
        <Flex className="data-selector">
            {dataCategory.match_id && (
                <Cascader
                    defaultValue={[dataCategory.match_id.toString()]}
                    options={gamesList}
                    onChange={(e) => {
                        setDataCategory((prevState) => ({
                            ...prevState,
                            match_id: e[0],
                        }));
                    }}
                />
            )}
            {dataCategory.performance_submenu !== "total" && (
                <GameStageRadio
                    setDataCategory={setDataCategory}
                    dataCategory={dataCategory}
                />
            )}

            {dataCategory.is_comparison && (
                <ComparisonRadio
                    setDataCategory={setDataCategory}
                    dataCategory={dataCategory}
                />
            )}
        </Flex>
    );
};

export default DataSelectorBasic;
