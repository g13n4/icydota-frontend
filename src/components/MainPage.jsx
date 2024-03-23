import React from "react";
import { Layout, Menu, theme } from "antd";
import PerformanceMenu from "./MainPageMenus/PerformanceMenu";
import MenuHeader from "./MainPageMenus/LeagueHeader";
import { Flex, Radio, Col } from "antd";
import DataContent from "./DataComponents/DataContent";

const { Content, Footer } = Layout;

const MainPage = () => {
	return (
		<Layout className="main-layout">
			<MenuHeader />
			<Layout>
				<Flex style={{ maxWidth: "90%" }}>
					<PerformanceMenu />
					<DataContent />
				</Flex>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default MainPage;
