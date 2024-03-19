import React, { useState, useEffect } from "react";
import { Flex, Radio, Cascader } from "antd";
import axios from "axios";
import "./../styles/DataSelector.css";
import FlatPercentRadio from "../Reusable/FlatPercentRadio";

const getAggregationRadioData = () => {
    return [
        {
            label: "By Position and Hero",
            value: "hero",
        },
        {
            label: "By Position and Player",
            value: "player",
        },
    ];
};

const getPositionRadioData = () => {
    return [
        {
            label: "Core",
            value: "core",
        },
        {
            label: "Mid",
            value: "mid",
        },
        {
            label: "Support",
            value: "support",
        },
    ];
};

const DataSelectorCross = ({ setDataCategory, dataCategory }) => {
    const [fieldList, setFieldList] = useState([]);

    const aggregationRadioData = getAggregationRadioData();
    const positionRadioData = getPositionRadioData();

    const field =
        dataCategory.performance_submenu === "total" ? "total" : "window";

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/field/${field}/`).then((res) => {
            setFieldList(res.data);
        });
    }, [dataCategory.performance_submenu]);

    return (
        <Flex className="data-selector">
            <Cascader
                defaultValue={[dataCategory.cross_data_field]}
                options={fieldList}
                onChange={(e) => {
                    setDataCategory((prevState) => ({
                        ...prevState,
                        cross_data_field: e[0],
                    }));
                }}
            />
            <FlatPercentRadio
                dataCategory={dataCategory}
                setDataCategory={setDataCategory}
            />
            <Radio.Group
                options={aggregationRadioData}
                onChange={(e) => {
                    setDataCategory((prevState) => ({
                        ...prevState,
                        cross_comparison_type: e.target.value,
                    }));
                }}
                value={dataCategory.cross_comparison_type}
                optionType="button"
                buttonStyle="solid"
            />
            <Radio.Group
                options={positionRadioData}
                onChange={(e) => {
                    setDataCategory((prevState) => ({
                        ...prevState,
                        cross_comparison_position: e.target.value,
                    }));
                }}
                value={dataCategory.cross_comparison_position}
                optionType="button"
                buttonStyle="solid"
            />
        </Flex>
    );
};

export default DataSelectorCross;
