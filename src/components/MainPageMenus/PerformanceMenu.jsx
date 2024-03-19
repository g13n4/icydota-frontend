import React from "react";
const { useState, useEffect } = React;
import { Layout, Menu, theme } from "antd";
import axios from "axios";
import { Col, Row, Divider } from "antd";

const getDefault = (key) => {
    if (key === "total") {
        return { cross_data_field: "total_gold" };
    } else {
        return { cross_data_field: "l2" };
    }
};

const setData = (keyName) => {
    const performance_menu = keyName;
    const is_basic = performance_menu.includes("data");
    const is_comparison = performance_menu.includes("comparison");
    const is_aggregation = performance_menu.includes("aggregation");
    const is_cross_comparison = performance_menu.includes("cross");
    return {
        performance_menu: performance_menu,
        is_basic: is_basic,
        is_comparison: is_comparison,
        is_aggregation: is_aggregation,
        is_cross_comparison: is_cross_comparison,
    };
};

const PerformanceMenu = ({ dataCategory, setDataCategory }) => {
    const [categoryMenuItems, setCategoryMenuItems] = useState([]);
    const [dataTypeItems, setDataTypeItems] = useState([]);

    const defaultCross = {};

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/menu_tc/", {
                params: {
                    comparison: dataCategory.is_comparison,
                },
            })
            .then((res) => {
                setCategoryMenuItems(res.data);
            });
    }, [dataCategory.performance_menu]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/menu_data_types/").then((res) => {
            setDataTypeItems(res.data);
        });
    }, []);

    return (
        <Col
            flex={"auto"}
            style={{ flexDirection: "column", maxWidth: "15em" }}
        >
            <Menu
                className="performance-menu"
                defaultSelectedKeys={["data"]}
                defaultOpenKeys={[]}
                mode={"vertical"}
                theme={"light"}
                items={dataTypeItems}
                onClick={(item) =>
                    setDataCategory((prevState) => {
                        return {
                            ...prevState,
                            ...setData(item.key),
                        };
                    })
                }
            />
            <Divider orientation="center">Categories:</Divider>
            <Menu
                defaultSelectedKeys={["total"]}
                defaultOpenKeys={[]}
                mode={"vertical"}
                theme={"light"}
                items={categoryMenuItems}
                onClick={(item) =>
                    setDataCategory((prevState) => {
                        return {
                            ...prevState,
                            performance_submenu: item.key,
                            ...getDefault(item.key),
                        };
                    })
                }
                className="performance-submenu"
                style={{
                    overflow: "scroll",
                    maxHeight: "100%",
                    width: "100%",
                }}
            />
        </Col>
    );
};

export default PerformanceMenu;
