import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Col, Flex, Cascader, Radio } from "antd";
import { SheetComponent } from "@antv/s2-react";
import { setLang } from "@antv/s2";
import "@antv/s2-react/dist/style.min.css";
import { compact } from "lodash";

const getAggregationRadioData = ({ turnedOn }) => {
    return [
        {
            label: "By Hero",
            value: "hero",
            disabled: turnedOn,
        },
        {
            label: "By Player",
            value: "player",
            disabled: turnedOn,
        },
        {
            label: "By Position",
            value: "position",
            disabled: turnedOn,
        },
    ];
};

const getComparisonRadioData = ({ turnedOn }) => {
    return [
        {
            label: "To position average",
            value: "general",
        },
        {
            label: "To each other",
            value: "player",
            disabled: turnedOn,
        },
    ];
};

const DataSelector = ({ setDataCategory, dataCategory, leagueId }) => {
    const [gamesList, setGamesList] = useState([]);

    const aggregationRadioData = getAggregationRadioData(
        dataCategory.is_aggregation
    );
    const comparisonRadioData = getComparisonRadioData(
        dataCategory.is_aggregation
    );

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
        <Flex
            align="center"
            vertical={false}
            justify="space-between"
            gap="large"
            style={{ height: "2em" }}
        >
            {dataCategory.match_id && !dataCategory.is_aggregation && (
                <Cascader
                    defaultValue={[dataCategory.match_id.toString()]}
                    options={gamesList}
                    onChange={(e) => {
                        setDataCategory((prevState) => ({
                            ...prevState,
                            match_id: e[0],
                        }));
                    }}
                    disabled={dataCategory.is_aggregation}
                />
            )}

            <Flex
                gap="large"
                justify="center"
            >
                {dataCategory.is_aggregation && (
                    <Radio.Group
                        options={aggregationRadioData}
                        onChange={(e) => {
                            setDataCategory((prevState) => ({
                                ...prevState,
                                aggregation_type: e.target.value,
                            }));
                        }}
                        value={dataCategory.aggregation_type}
                        optionType="button"
                        buttonStyle="solid"
                        disabled={dataCategory.is_match}
                    />
                )}
                {dataCategory.is_comparison && !dataCategory.is_aggregation && (
                    <Radio.Group
                        options={comparisonRadioData}
                        onChange={(e) => {
                            setDataCategory((prevState) => ({
                                ...prevState,
                                comparison: e.target.value,
                            }));
                        }}
                        value={dataCategory.comparison}
                        optionType="button"
                        buttonStyle="solid"
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default DataSelector;
