import React from "react";
import { Menu, Layout, Flex, Typography, Cascader } from "antd";
const { Header } = Layout;
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../actions/menuSelected";

import "./../styles/LeagueHeader.css";
import "../styles/PseudoAnt.css";

const { Text } = Typography;

const getHeaderMenu = () => {
	return [
		{
			label: "Matches",
			value: "data",
		},
		{
			label: "Aggregation",
			value: "aggregation",
		},
		{
			label: "Comparison",
			value: "cross_comparison",
		},
	];
};

const LeagueHeader = () => {
	const dispatch = useDispatch();

	const { leagueMenu, leagueMenuDefault, darkTheme } = useSelector(
		(state) => state.menu,
	);
	const headerMenu = getHeaderMenu();
	const footerTheme = darkTheme
		? "pant-dark pant-colours-dark"
		: "pant-light pant-colours-light";

	return (
		leagueMenu.length > 0 && (
			<Header className={`menu-header on-top ${footerTheme}`}>
				<div className="menu-options">
					<Menu
						mode="horizontal"
						defaultSelectedKeys={[leagueMenuDefault]}
						onClick={(e) => dispatch(setSelected("menu", e.key))}
						items={headerMenu}
						className="menu-menu"
					/>
				</div>
				<div className="menu-league">
					<Text
						style={{
							style: "bold",
							fontSize: "1.3em",
							paddingRight: "1em",
							flexWrap: "nowrap",
							flexBasis: 0,
							minWidth: "6em",
						}}
					>
						Leagues:
					</Text>
					<Cascader
						size="large"
						defaultValue={[leagueMenuDefault]}
						onChange={(e) => dispatch(setSelected("league", e.key))}
						options={leagueMenu}
						className="league-cascader"
					/>
				</div>
			</Header>
		)
	);
};

export default LeagueHeader;
