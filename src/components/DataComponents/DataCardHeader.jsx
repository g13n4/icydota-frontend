import React from "react";

import { useNavigate } from "react-router-dom";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowBigLeft } from "lucide-react";

const DataCardHeader = ({ headerText, iconSize = 36, leagueId }) => {
	const navigate = useNavigate();

	return (
		<CardHeader>
			<CardTitle className="flex flex-row items-baseline">
				<ArrowBigLeft
					size={iconSize}
					absoluteStrokeWidth={true}
					className={`fixed hover:cursor-pointer hover:text-primary
            top-[calc(50% - ${iconSize})]`}
					onClick={() => navigate(`/${leagueId}`)}
				/>
				<div className="w-full">
					<h1 className="text-3xl">{headerText}</h1>
				</div>
			</CardTitle>
		</CardHeader>
	);
};

export default DataCardHeader;
