import React from "react";
import { Col, Flex, Button, Radio } from "antd";
import "./../styles/DataSelector.css";
import GameStageRadio from "../Reusable/GameStageRadio";
import FlatPercentRadio from "../Reusable/FlatPercentRadio";

const getAggregationRadioData = () => {
    return [
        {
            label: "By Hero",
            value: "hero",
        },
        {
            label: "By Player",
            value: "player",
        },
        {
            label: "By Position",
            value: "position",
        },
    ];
};

const DataSelectorAgg = ({ setDataCategory, dataCategory }) => {
    const aggregationRadioData = getAggregationRadioData();

    return (
        <Flex className="data-selector">
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
            {dataCategory.performance_submenu !== "total" && (
                <GameStageRadio
                    setDataCategory={setDataCategory}
                    dataCategory={dataCategory}
                />
            )}
            {dataCategory.is_comparison && (
                <FlatPercentRadio
                    setDataCategory={setDataCategory}
                    dataCategory={dataCategory}
                />
            )}
        </Flex>
    );
};

export default DataSelectorAgg;
