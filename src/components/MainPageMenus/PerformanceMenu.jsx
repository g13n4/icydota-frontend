import React from "react";
import { Col, Menu, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../actions/menuSelected";

const PerformanceMenu = () => {
	const dispatch = useDispatch();

	const { menu, menuDefault, submenu, submenuComparison } = useSelector(
		(state) => state.menu,
	);

	const { isComparison, submenuSelected, submenuComparisonSelected } =
		useSelector((state) => state.menuSelected);

	return (
		<Col flex={"auto"} style={{ flexDirection: "column", maxWidth: "15em" }}>
			<Menu
				className="performance-menu"
				defaultSelectedKeys={[menuDefault]}
				mode={"vertical"}
				theme={"light"}
				items={menu}
				onClick={(item) => dispatch(setSelected("menu", item.key))}
			/>
			<Divider orientation="center">Categories:</Divider>
			<Menu
				defaultSelectedKeys={[
					isComparison ? submenuComparisonSelected : submenuSelected,
				]}
				mode={"vertical"}
				theme={"light"}
				items={isComparison ? submenuComparison : submenu}
				onClick={(item) => {
					isComparison
						? dispatch(setSelected("submenu_comparison", item.key))
						: dispatch(setSelected("submenu", item.key));
				}}
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
