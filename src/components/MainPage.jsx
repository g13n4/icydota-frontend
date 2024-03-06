import React, { useState, useEffect } from "react";
import { Layout, Menu, theme } from "antd";
import PerformanceMenu from "./MainPageMenus/PerformanceMenu";
import MenuHeader from "./MainPageMenus/LeagueHeader";
import { Flex, Radio, Col } from "antd";
import DataContent from "./DataComponents/DataContent";

const { Content, Footer } = Layout;

const MainPage = () => {
    const [leagueId, setLeagueId] = useState(null);
    const [dataCategory, setDataCategory] = useState({
        match_id: null,
        data_type: "total",
        is_comparison: false,
        comparison: "none",
        flat: true,
        is_aggregation: false,
        is_match: true,
        aggregation_type: "player",
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
                    <PerformanceMenu setDataCategory={setDataCategory} />
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
