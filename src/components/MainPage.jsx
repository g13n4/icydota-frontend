import React from "react";
import { Layout, Menu, theme } from "antd";
import PerformanceMenu from "./MainPageMenus/PerformanceMenu";
import MenuHeader from "./MainPageMenus/LeagueHeader";
import PageFooter from "./otherComponents/PageFooter";
import { Flex, Radio, Col } from "antd";
import DataContent from "./DataComponents/DataContent";
import PerformanceSubmenuName from "./DataComponents/PerformanceSubmenuName";
import "./styles/MainPage.css";

const MainPage = () => {
	return (
		<div className="background-page">
			<div className="main-page">
				<Layout>
					<MenuHeader />
					<Layout>
						<Flex>
							<PerformanceMenu />
							<Flex vertical={true} style={{ width: "100%" }}>
								<PerformanceSubmenuName />
								<DataContent />
							</Flex>
						</Flex>
						<PageFooter />
					</Layout>
				</Layout>
			</div>
		</div>
	);
};

export default MainPage;
