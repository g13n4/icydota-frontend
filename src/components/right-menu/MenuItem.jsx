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
	isSelected,
	itemText,
	itemTooltip,
	buttonIcon = "info",
	inSummary = false,
	onClick,
	iconSize = 16,
}) => {
	const IconComponent = getButtonComponent(buttonIcon);
	const triggerRef = useRef(null);
	const selectedTextClass = isSelected ? "bg-secondary text-primary" : "";

	const ToolTip = () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					ref={triggerRef}
					asChild
					onClick={(event) => event.preventDefault()}
				>
					<IconComponent size={iconSize} absoluteStrokeWidth={false} />
				</TooltipTrigger>
				<TooltipContent
					side="left"
					sideOffset={5}
					onPointerDownOutside={(event) => {
						if (event.target === triggerRef.current) event.preventDefault();
					}}
					className="p-3 bg-gray-500/90 rounded-sm"
				>
					<p className="text-card-foreground">{itemTooltip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);

	const ItemText = ({ className }) => (
		<p className={`text-l font-bold ${className}`}>{itemText}</p>
	);

	return inSummary ? (
		<summary
			className={selectedTextClass}
			onClick={onClick}
			onKeyDown={onClick}
		>
			<a className="flex flex-row">
				<ToolTip />
				<ItemText className="px-2" />
			</a>
		</summary>
	) : (
		<li className={selectedTextClass} onClick={onClick} onKeyDown={onClick}>
			<a>
				<ToolTip />
				<ItemText />
			</a>
		</li>
	);
};

export default MenuItem;
