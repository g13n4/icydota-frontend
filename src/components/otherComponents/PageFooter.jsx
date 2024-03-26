import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Flex, Typography } from "antd";

const { Footer } = Layout;

const { Text } = Typography;

const ToLink = ({ text, link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			{text}
		</a>
	);
};

const PageFooter = () => {
	const { darkTheme, lastEditDate, appVersion } = useSelector(
		(state) => state.menu,
	);

	return (
		<Footer
			className={"ant-menu ant-menu-root"}
			style={{
				backgroundColor: darkTheme ? "#141414" : "#ffffff",
				borderColor: darkTheme
					? "rgba(253, 253, 253, 0.12)"
					: "rgba(5, 5, 5, 0.06)",
				borderWidth: "1px",
				borderLeftWidth: "0px",
				borderRightWidth: "0px",
				borderBottomWidth: "0px",
				borderStyle: "solid",
				margin: "1.5em 0 0 0",
			}}
		>
			<Flex
				vertical={false}
				style={{
					justifyContent: "space-around",
				}}
			>
				<Flex
					vertical={true}
					className="page-footer-left"
					style={{
						textAlign: "right",
					}}
				>
					<Text>
						Data comes from raw replay files downloaded from{" "}
						<ToLink text={"Steam"} link={"https://steamcommunity.com/"} />
					</Text>
					<Text>
						Total data for matches comes from{" "}
						<ToLink text={"OpenDota"} link={"https://www.opendota.com/"} />
					</Text>
					<Text>Last updated: {lastEditDate}</Text>
					<Text>App version: {appVersion}</Text>
				</Flex>
				<Flex vertical={true} className="page-footer-right">
					<Text>
						Made by{" "}
						<a href="https://github.com/g13n4" target="_blank" rel="noreferrer">
							g13n4
						</a>
					</Text>
					<Text>Using:</Text>
					<Text>
						<ToLink text={"FastAPI"} link={"https://fastapi.tiangolo.com/"} />
					</Text>
					<Text>
						<ToLink text={"React"} link={"https://react.dev/"} /> (
						<ToLink text={"Antd"} link={"https://ant.design/"} /> /{" "}
						<ToLink
							text={"Antv s2"}
							link={"https://s2-v1.antv.antgroup.com/"}
						/>
						)
					</Text>
				</Flex>
			</Flex>
		</Footer>
	);
};

export default PageFooter;
