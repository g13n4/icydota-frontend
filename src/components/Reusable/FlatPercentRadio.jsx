import React from "react";
import { Radio } from "antd";

const getFlatPercent = () => {
    return [
        {
            label: "Flat",
            value: "flat",
        },
        {
            label: "Percent",
            value: "percent",
        },
    ];
};

const FlatPercentRadio = ({ dataCategory, setDataCategory }) => {
    const flatRadioData = getFlatPercent();

    return (
        <Radio.Group
            options={flatRadioData}
            onChange={(e) => {
                setDataCategory((prevState) => ({
                    ...prevState,
                    flat: "flat" === e.target.value ? true : false,
                }));
            }}
            value={dataCategory.flat ? "flat" : "percent"}
            optionType="button"
            buttonStyle="solid"
        />
    );
};

export default FlatPercentRadio;
