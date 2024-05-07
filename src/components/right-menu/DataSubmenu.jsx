import React from "react";
import MenuItem from "./MenuItem";

const isArray = (value) => Array.isArray(value) && value.length > 0;

const BuildLevel = ({ data, menuData, menuDataSetter, depth = 0 }) => {
	const defaultClass =
		depth === 0 ? "dui-menu dui-menu-xs p-0.5 mb-[28px]" : "";

	return (
		<ul className={`${defaultClass}`}>
			{data.map((element, idx) => {
				return isArray(element.children) ? (
					<li key={`li-${element.key}`}>
						<details open={false}>
							<MenuItem
								key={element.key}
								isSelected={element.key === menuData.categoryParent}
								itemText={element.label}
								itemTooltip={element.label}
								buttonIcon={element.label}
								inSummary={true}
							/>
							<BuildLevel
								key={element.label}
								data={element.children}
								menuData={menuData}
								menuDataSetter={menuDataSetter}
								depth={depth + 1}
							/>
						</details>
					</li>
				) : (
					<MenuItem
						key={element.key}
						isSelected={element.id === menuData.category}
						itemText={element.label}
						itemTooltip={element.label}
						buttonIcon={element.label}
						onClick={() => {
							menuDataSetter(element.id, element.parent);
						}}
					/>
				);
			})}
		</ul>
	);
};

const DataSubmenu = ({ data, menuData, menuDataSetter }) => {
	const menuDataSetterWrapper = (submenu, submenuParent) => {
		menuDataSetter((prevState) => ({
			...prevState,
			categoryParent: submenuParent,
			category: submenu,
			changed: true,
		}));
	};

	return (
		<nav className="overflow-y-auto overflow-x-hidden">
			<BuildLevel
				data={data}
				menuData={menuData}
				menuDataSetter={menuDataSetterWrapper}
			/>
		</nav>
	);
};

export default DataSubmenu;
