import React from "react";
import { Flex, Radio } from "antd";
import FlatPercentRadio from "./FlatPercentRadio";

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

const ComparisonRadio = ({ dataCategory, setDataCategory }) => {
    const comparisonRadioData = getComparisonRadioData(
        dataCategory.is_aggregation
    );

    return (
        <Flex gap={"large"}>
            <FlatPercentRadio
                dataCategory={dataCategory}
                setDataCategory={setDataCategory}
            />
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
        </Flex>
    );
};

export default ComparisonRadio;
