import React from "react";

import MenuItem from "./MenuItem";

const isArray = (value) => Array.isArray(value) && value.length > 0;

const BuildLevel = ({ data, parentLabel = "", selectedKey }) => {
	const defaultClass =
		parentLabel.length === 0 ? "dui-menu dui-menu-sm p-0.5" : "";

	return (
		<ul className={`${defaultClass}`}>
			{data.map((element) => {
				return isArray(element.children) ? (
					<li>
						<details open={false}>
							<summary className={element.label === parentLabel ? "" : ""}>
								<MenuItem
									key={element.key}
									selectedKey={selectedKey}
									elemText={element.label}
									elemTooltip={element.label}
									buttonIcon={element.label}
									inLi={false}
								/>
							</summary>
							<BuildLevel
								data={element.children}
								parentLabel={element.label}
								selectedKey={selectedKey}
							/>
						</details>
					</li>
				) : (
					<MenuItem
						key={element.key}
						selectedKey={selectedKey}
						elemText={element.label}
						elemTooltip={element.label}
						buttonIcon={element.label}
					/>
				);
			})}
		</ul>
	);
};

const ProcessedDataType = ({ data }) => {
	const selectedKey = "c7";
	return (
		<nav className="overflow-y-auto overflow-x-hidden">
			<BuildLevel data={data} selectedKey={selectedKey} />
		</nav>
	);
};

export default ProcessedDataType;
