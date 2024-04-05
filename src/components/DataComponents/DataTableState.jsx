import React from "react";
import { Spin, Flex, Typography } from "antd";

const { Title } = Typography;

const DataTableState = ({ darkTheme, loading }) => {
	return (
		<Flex
			vertical={true}
			style={{
				border: "3px",
				borderStyle: "dashed",
				borderColor: darkTheme ? "white" : "black",

				paddingTop: "15em",
				paddingBottom: "15em",
				paddingLeft: "1em",
				paddingRight: "1em",
				margin: "1em",
				alignItems: "center",
				justifyItems: "center",
				justifyContent: "center",
			}}
		>
			{loading ? (
				<Spin size="large">
					<div className="content" />
				</Spin>
			) : (
				<Title
					level={1}
					style={{
						color: darkTheme ? "white" : "black",

						textAlign: "center",
						paddingTop: "0.25em",
						margin: "0px",
					}}
				>
					Data is currently unavailable (but it should be). It will be fixed in
					the next version.
				</Title>
			)}
		</Flex>
	);
};

export default DataTableState;
