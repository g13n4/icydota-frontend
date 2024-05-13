import { Settings } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import SettingsContent from "./SettingsContent";
import { isMobile } from "react-device-detect";

const getPopoverSide = (isMobile, isTableView) => {
	if (isMobile) {
		return "top";
	}

	if (isTableView) {
		return "right";
	}

	return "left";
};

const SettingsButton = ({ tableView }) => {
	const buttonSide = tableView ? "left-[10%]" : "right-[10%]";
	const popoverSide = getPopoverSide(isMobile, tableView);

	return (
		<div
			className={`fixed top-[85%] ${buttonSide} 
        w-[40px] h-[40px] border-2 bg-muted rounded-lg z-40
        border-border flex justify-center opacity-40 hover:opacity-90`}
		>
			<Popover>
				<PopoverTrigger>
					<Settings size={34} absoluteStrokeWidth={true} />
				</PopoverTrigger>
				<PopoverContent align="center" side={popoverSide}>
					<SettingsContent tableView={tableView} />
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default SettingsButton;
