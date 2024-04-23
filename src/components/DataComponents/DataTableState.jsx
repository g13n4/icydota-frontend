import React from "react";

const DataTableState = ({ darkTheme, loading }) => {
	return (
		<div
		// style={{
		// 	border: "3px",
		// 	borderStyle: "dashed",
		// 	borderColor: darkTheme ? "white" : "black",

		// 	paddingTop: "15em",
		// 	paddingBottom: "15em",
		// 	paddingLeft: "1em",
		// 	paddingRight: "1em",
		// 	margin: "1em",
		// 	alignItems: "center",
		// 	justifyItems: "center",
		// 	justifyContent: "center",
		// }}
		>
			{loading ? (
				<h1>loading animation</h1>
			) : (
				<h1>
					Data is currently unavailable (but it should be). It will be fixed in
					the next version.
				</h1>
			)}
		</div>
	);
};

export default DataTableState;
