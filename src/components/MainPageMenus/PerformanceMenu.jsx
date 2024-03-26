import React from "react";
import { Col, Menu, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../actions/menuSelected";
import "./../styles/PerformanceMenu.css";

const dispatchSelectedSubmenu = (dispatch, isComparison, item) => {
	if (isComparison) {
		dispatch(setSelected("submenu_comparison", item.key));
		//		dispatch(setSelected("name_comparison", item.label));
	} else {
		dispatch(setSelected("submenu", item.key));
		//		dispatch(setSelected("name", item.label));
	}
};
const PerformanceMenu = () => {
	const dispatch = useDispatch();

	const { menu, submenu, submenuComparison } = useSelector(
		(state) => state.menu,
	);

	const {
		isComparison,
		menuSelected,
		submenuSelected,
		submenuComparisonSelected,
	} = useSelector((state) => state.menuSelected);

	const defaultSubmenu = isComparison
		? submenuComparisonSelected
		: submenuSelected;

	return (
		<Col flex={"auto"} style={{ flexDirection: "column", maxWidth: "15em" }}>
			{menuSelected && (
				<Menu
					style={{ textAlign: "center" }}
					className="performance-menu"
					defaultSelectedKeys={[menuSelected]}
					mode={"vertical"}
					theme={"light"}
					items={menu}
					onClick={(item) => dispatch(setSelected("menu", item.key))}
				/>
			)}
			<Divider orientation="center">Categories:</Divider>
			<Menu
				defaultSelectedKeys={[defaultSubmenu]}
				mode={"vertical"}
				theme={"light"}
				items={isComparison ? submenuComparison : submenu}
				onClick={(item) => {
					dispatchSelectedSubmenu(dispatch, isComparison, item);
				}}
				className="performance-submenu"
				style={{
					maxHeight: "100%",
					width: "100%",
					textAlign: "center",
				}}
			/>
		</Col>
	);
};

export default PerformanceMenu;
