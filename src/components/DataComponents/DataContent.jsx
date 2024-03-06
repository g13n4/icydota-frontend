import React, { useRef } from "react";
import axios from "axios";
import "@antv/s2-react/dist/style.min.css";
import DataTable from "./DataTable";
import { Layout, Flex } from "antd";
const { Content } = Layout;
const { useState, useEffect } = React;
import DataSelector from "./DataSelector";

const DataContent = ({ dataCategory, setDataCategory, leagueId }) => {
    const [menuData, setMenuData] = useState([]);

    const ref = useRef(null);

    // axious data request
    useEffect(() => {
        const params = {
            data_type: dataCategory.data_type,
            comparison: dataCategory.comparison,
            flat: dataCategory.flat,
        };

        if (
            dataCategory.is_match &&
            dataCategory.match_id &&
            dataCategory.data_type
        ) {
            const link = `http://127.0.0.1:8000/performance_data/${dataCategory.match_id}/`;
            axios.get(link, { params }).then((res) => {
                setMenuData(res.data);
            });
        } else if (dataCategory.is_aggregation && dataCategory.data_type) {
            const link = `http://127.0.0.1:8000/performance_aggregated_data/${leagueId}/${dataCategory.aggregation_type}/`;
            axios.get(link, { params }).then((res) => {
                setMenuData(res.data);
            });
        }
    }, [dataCategory]);

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
                <DataTable
                    tableData={menuData}
                    dataCategory={dataCategory}
                    parentRef={ref}
                />
            </Flex>
        </Content>
    );
};

export default DataContent;
