import React, { useRef } from "react";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

import {
	Book,
	HandCoins,
	Info,
	Swords,
	View,
	MessageCircleQuestion,
} from "lucide-react";

const getButtonComponent = (buttonName) => {
	switch (buttonName) {
		case "info":
			return Info;
		case "gold":
			return HandCoins;
		case "exp":
			return Book;
		case "kda":
			return Swords;
		case "wards":
			return View;
		default:
			return MessageCircleQuestion;
	}
};

const MenuItem = ({
	label,
	selectedLabel,
	elemText,
	elemTooltip,
	buttonIcon = "info",
	inLi = true,
}) => {
	const IconComponent = getButtonComponent(buttonIcon);
	const triggerRef = useRef(null);
	const selectedClass =
		selectedLabel === label ? "bg-secondary text-primary" : "";

	const ToolTip = () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					ref={triggerRef}
					asChild
					onClick={(event) => event.preventDefault()}
				>
					<IconComponent size={16} absoluteStrokeWidth={false} />
				</TooltipTrigger>
				<TooltipContent
					side="right"
					sideOffset={5}
					onPointerDownOutside={(event) => {
						if (event.target === triggerRef.current) event.preventDefault();
					}}
				>
					<p>{elemTooltip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);

	return inLi ? (
		<li className={selectedClass}>
			<a>
				<ToolTip />
				<p className="text-l font-bold">{elemText}</p>
			</a>
		</li>
	) : (
		<>
			<ToolTip />
			<p className="text-l font-bold">{elemText}</p>
		</>
	);
};

export default MenuItem;
