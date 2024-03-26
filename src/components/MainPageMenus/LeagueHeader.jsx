import React from "react";
import { Menu, Layout } from "antd";
const { Header } = Layout;
import "./../styles/LeagueHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../actions/menuSelected";

const LeagueHeader = () => {
	const dispatch = useDispatch();

	const { leagueMenu, leagueMenuDefault } = useSelector((state) => state.menu);

	return (
		leagueMenu.length > 0 && (
			<Header className="menu-header">
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={[leagueMenuDefault]}
					onClick={(e) => dispatch(setSelected("league", e.key))}
					items={leagueMenu}
					className="menu-menu"
				/>
			</Header>
		)
	);
};

export default LeagueHeader;
