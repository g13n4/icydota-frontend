import React, { useRef } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/components/ui/tooltip";

const RadioItem = ({
	labelText,
	isChecked,
	tooltipText,
	onChange,
	checkboxId,
	value,
	index,
}) => {
	const triggerRef = useRef(null);
	return (
		<div
			className={`items-center flex flex-row space-x-2 border ${
				index === 0 ? "border-x-2" : "border-l-0 border-r-2"
			} border-y-0 px-2`}
		>
			<Checkbox
				className="rounded-none"
				checked={isChecked}
				id={checkboxId}
				onCheckedChange={() => onChange(value)}
				value={value}
			/>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger
						ref={triggerRef}
						asChild
						onClick={(event) => event.preventDefault()}
					>
						<label htmlFor={checkboxId}>{labelText}</label>
					</TooltipTrigger>
					{tooltipText && (
						<TooltipContent
							className="p-3 bg-gray-500/90 rounded-sm"
							side="top"
							sideOffset={5}
							onPointerDownOutside={(event) => {
								if (event.target === triggerRef.current) event.preventDefault();
							}}
						>
							<label htmlFor={checkboxId}>{tooltipText}</label>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export default RadioItem;
