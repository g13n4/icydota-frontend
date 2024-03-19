import React, { useRef } from "react";
import axios from "axios";
//import DataTable from "./DataTable";
import { Layout, Flex } from "antd";
const { Content } = Layout;
const { useState, useEffect } = React;
import DataSelectorAgg from "./DataSelectorAgg";
import DataSelectorBasic from "./DataSelectorBasic";
import DataSelectorCross from "./DataSelectorCross";
import getTableData from "./../../utils/getTableData";

const getDataSelector = (dataCategory) => {
    if (dataCategory.is_basic) {
        return DataSelectorBasic;
    } else if (dataCategory.is_aggregation) {
        return DataSelectorAgg;
    } else if (dataCategory.is_cross_comparison) {
        return DataSelectorCross;
    }
    throw new Error("No category is chosen!", dataCategory);
};

const DataContent = ({ dataCategory, setDataCategory, leagueId }) => {
    const [menuData, setMenuData] = useState(null);

    const ref = useRef(null);

    const DataSelector = getDataSelector(dataCategory);

    // axious data request
    useEffect(() => {
        getTableData({ dataCategory, setMenuData, leagueId });
    }, [dataCategory, leagueId]);

    return (
        <Content
            style={{ margin: "24px 16px 0" }}
            ref={ref}
        >
            <Flex
                vertical={true}
                gap={"middle"}
            >
                <DataSelector
                    dataCategory={dataCategory}
                    setDataCategory={setDataCategory}
                    leagueId={leagueId}
                />
                {/* {menuData && (
                    <DataTable
                        tableData={menuData}
                        dataCategory={dataCategory}
                        parentRef={ref}
                    />
                )} */}
            </Flex>
        </Content>
    );
};

export default DataContent;
