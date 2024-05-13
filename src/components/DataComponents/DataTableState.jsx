import React, { useEffect, useState } from "react";

const DataTableState = ({ loading }) => {
	const [dotCount, setDotCount] = useState(1);

	useEffect(() => {
		setInterval(() => setDotCount((oldCount) => (oldCount + 1) % 3), 1000);
	}, []);

	return (
		<div
			className="border-4 border-dashed border-border py-16 px-2 m-1 
			align-middle "
		>
			{loading ? (
				<>
					<span className="dui-loading dui-loading-ring dui-loading-lg">
						loading
					</span>
					<h1 className="py-4">loading{".".repeat(dotCount + 1)}</h1>
				</>
			) : (
				<h1 className="py-4">
					Data is currently unavailable (but it should be!). It will be fixed in
					the next version.
				</h1>
			)}
		</div>
	);
};

export default DataTableState;
