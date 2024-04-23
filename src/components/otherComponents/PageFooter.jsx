import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, div, Typography } from "antd";
import "../styles/PseudoAnt.css";

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

	const footerTheme = darkTheme
		? "pant-dark pant-colours-dark"
		: "pant-light pant-colours-light";
	console.log(footerTheme);

	return (
		<Footer
			className={`on-bottom ${footerTheme}`}
			style={{
				margin: "1em 0 0 0",
				padding: "2em",
			}}
		>
			<div
				vertical={false}
				style={{
					justifyContent: "space-around",
				}}
			>
				<div
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
				</div>
				<div vertical={true} className="page-footer-right">
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
				</div>
			</div>
		</Footer>
	);
};

export default PageFooter;
