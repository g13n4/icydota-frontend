import React, { useState, useEffect } from "react";
import { Layout, Menu, theme } from "antd";
import PerformanceMenu from "./MainPageMenus/PerformanceMenu";
import MenuHeader from "./MainPageMenus/LeagueHeader";
import { Flex, Radio, Col } from "antd";
import DataContent from "./DataComponents/DataContent";
import { useDispatch, useSelector } from "react-redux";

const { Content, Footer } = Layout;

const MainPage = () => {

    
    const [leagueId, setLeagueId] = useState(null);
    const [dataCategory, setDataCategory] = useState({
        match_id: null,
        data_field: "l2",
        aggregation_type: null,
        lane: true,
        comparison: null,
        flat: true,
        is_aggregation: false,
        is_comparison: false,
        is_cross_comparison: false,
        is_basic: true,
        performance_menu: "data",
        performance_submenu: "total",
    });

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="main-layout">
            <MenuHeader
                leagueId={leagueId}
                setLeagueId={setLeagueId}
            />
            <Layout>
                <Flex style={{ maxWidth: "90%" }}>
                    <PerformanceMenu
                        dataCategory={dataCategory}
                        setDataCategory={setDataCategory}
                    />
                    <DataContent
                        dataCategory={dataCategory}
                        setDataCategory={setDataCategory}
                        leagueId={leagueId}
                    />
                </Flex>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainPage;
