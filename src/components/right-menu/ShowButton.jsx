import React from "react";

const buttonTheme =
	"h-[47px] flex border justify-center text-4xl cursor-pointer z-30";

const ShowButton = ({ uiSetter }) => {
	return (
		<div
			className={`${buttonTheme} fixed right-[8px] top-[5px] w-[140px] bg-background/60`}
			onClick={() => uiSetter(true)}
			onKeyDown={() => uiSetter(true)}
		>
			<h1>SHOW</h1>
		</div>
	);
};

export { ShowButton, buttonTheme };
