import React, { useRef } from "react";
import axios from "axios";
import "@antv/s2-react/dist/style.min.css";
import DataTable from "./DataTable";
import { Layout, Flex } from "antd";
const { Content } = Layout;
const { useState, useEffect } = React;
import DataSelector from "./DataSelector";

const DataContent = ({ dataCategory, setDataCategory, leagueId }) => {
    const [menuData, setMenuData] = useState(null);

    const ref = useRef(null);

    // axious data request
    useEffect(() => {
        const params = {
            data_type: dataCategory.performance_submenu,
            comparison: dataCategory.comparison,
            flat: dataCategory.flat,
            lane_data: dataCategory.flat,
        };

        if (dataCategory.is_cross_comparison) {
            const link = `http://127.0.0.1:8000/performance_cross_comparison/15475/${dataCategory.aggregation_type}/carry/`;
            axios
                .get(link, {
                    params: {
                        data_type: 1,
                        data_field: dataCategory.data_field,
                        //             data_type: dataCategory.performance_submenu,
                        flat: dataCategory.flat,
                    },
                })
                .then((res) => {
                    setMenuData(res.data);
                });
        } else if (dataCategory.is_aggregation) {
            const link = `http://127.0.0.1:8000/performance_aggregated_data/${leagueId}/${dataCategory.aggregation_type}/`;
            axios.get(link, { params }).then((res) => {
                setMenuData(res.data);
            });
        } else if (dataCategory.match_id) {
            const link = `http://127.0.0.1:8000/performance_data/${dataCategory.match_id}/`;
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
                {menuData && (
                    <DataTable
                        tableData={menuData}
                        dataCategory={dataCategory}
                        parentRef={ref}
                    />
                )}
            </Flex>
        </Content>
    );
};

export default DataContent;
