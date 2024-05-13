const ComparisonButton = ({ menuData, menuDataSetter }) => {
	const baseTheme =
		"px-[8px] my-[3px] border h-[65px] flex flex-col items-center justify-center";
	const isComparisonTheme = `${baseTheme} border-primary cursor-pointer`;
	const notComparisonTheme = `${baseTheme} cursor-pointer`;
	const disabledButtonTheme = `${baseTheme} bg-muted text-muted cursor-not-allowed`;
	// ON / OFF STYLE
	const baseStateStyle = "px-1";
	const OnStateStyle = `${baseStateStyle} text-primary `;
	const OffStateStyle = `${baseStateStyle} font-bold text-muted-foreground`;

	if (menuData.mode === "cross") {
		return (
			<div className={disabledButtonTheme}>
				<p>NOT</p>
				<p>AVAILABLE</p>
			</div>
		);
	}

	function menuDataSetterWrapper() {
		menuDataSetter((prevState) => ({
			...prevState,
			isComparison: !prevState.isComparison,
			changed: true,
		}));
	}

	return (
		<div
			className={menuData.isComparison ? isComparisonTheme : notComparisonTheme}
			onClick={menuDataSetterWrapper}
			onKeyDown={menuDataSetterWrapper}
		>
			<p>COMPARISON</p>
			<div className="flex flex-row">
				<p>MODE:</p>
				{menuData.isComparison ? (
					<p className={OnStateStyle} key={"comparison-on"}>
						ON
					</p>
				) : (
					<p className={OffStateStyle} key={"comparison-off"}>
						OFF
					</p>
				)}
			</div>
		</div>
	);
};

export default ComparisonButton;
