import React from "react";

import { Card } from "@/components/ui/card";

const direColour = "!text-red-600";
const sentinelColour = "!text-green-600";
const winStyle = "border-[#FFD700] shadow-md ";

const SideName = ({ isDire }) => {
	return isDire ? (
		<p className={`${direColour} pr-0.5`}>Dire</p>
	) : (
		<p className={`${sentinelColour} pr-0.5`}>Sentinel</p>
	);
};

const SideWon = ({ won }) => {
	return won ? (
		<p className="font-semibold pl-0.5">WIN</p>
	) : (
		<p className="font-normal text-muted-foreground pl-0.5">LOSE</p>
	);
};

const SideText = ({ isDire, won }) => {
	return (
		<li className="flex flex-row whitespace-nowrap mb-0.5">
			<SideName isDire={isDire} />
			{" - "}
			<SideWon won={won} />
		</li>
	);
};

const getWinBorder = (isDire, won) => {
	const wonBorderBase = `border border-t-0 border-b-2 ${winStyle} shadow-[#C0C0C0]/70`;

	if (won) {
		return isDire
			? `${wonBorderBase} border-r-2 border-l-0`
			: `${wonBorderBase} border-l-2 border-r-0`;
	}
	return "";
};

const CardNameSide = ({ isDire, won, teamName }) => {
	const wonTeam = won ? "font-semibold" : "font-normal text-muted-foreground";
	const wonBorder = getWinBorder(isDire, won);

	const classData = `${wonTeam} mb-0.5`;
	const ulClass = isDire ? "text-left pl-2" : "text-right pr-2";

	return (
		<ul className={`${ulClass} w-5/12 pb-1 px-0.5 ${wonBorder} `}>
			<SideText isDire={isDire} won={won} />
			<li className={classData}>{teamName}</li>
		</ul>
	);
};

const CardData = ({ data, direWon }) => {
	const itemCellClass = "";
	const dataCellClass = "";
	const centralCellClass = "w-2/12 ";

	const winBorderStyle = `border border-y-0  ${winStyle}`;

	const direWinStyle = direWon ? `${winBorderStyle} border-l-2 border-r-0` : "";
	const sentWinStyle = direWon ? "" : `${winBorderStyle} border-r-2 border-l-0`;

	return (
		<div className="border-y-2  p-2 flex flex-col text-center">
			<table>
				<tbody className="pt-2">
					<tr className="pt-2">
						<th className={`${sentinelColour} m-2 w-3/12`}>Sentinel</th>
						<th className={`${centralCellClass}`}>&nbsp;</th>
						<th className={`${direColour} w-3/12`}>Dire</th>
					</tr>
					{data.map((item, idx) => {
						const sentBigger = item.bigger === 1 ? "text-medium underline" : "";
						const direBigger = item.bigger === 2 ? "text-medium underline" : "";

						return (
							<tr key={item.id}>
								<td
									className={`${itemCellClass} ${sentWinStyle} ${sentBigger}`}
								>
									{item.sent}
								</td>
								<td className={`${dataCellClass} ${centralCellClass}`}>
									{item.name}
								</td>
								<td
									className={`${itemCellClass} ${direWinStyle} ${direBigger}`}
								>
									{item.dire}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const CardFooter = ({ duration, gameId }) => {
	return (
		<div className="flex flex-row justify-between py-1 px-2 text-center align-middle">
			<p>duration: {duration}</p>
			<p>game id: {gameId}</p>
		</div>
	);
};

const DataMatchPreviewCard = ({
	teamDireName,
	teamSentName,
	gameId,
	direWon,
	duration,
	data,
}) => {
	return (
		<Card
			className="flex flex-col px-2 pt-2 justify-center
			hover:ring-offset-2 hover:ring-2 hover:ring-destructive cursor-pointer"
		>
			<div className="flex flex-row justify-center mb-2 pb-1">
				<CardNameSide isDire={false} won={!direWon} teamName={teamSentName} />
				<div className="self-center px-2.5 text-destructive">X</div>
				<CardNameSide isDire={true} won={direWon} teamName={teamDireName} />
			</div>
			<CardData data={data} direWon={direWon} />
			<CardFooter duration={duration} gameId={gameId} />
		</Card>
	);
};

export default DataMatchPreviewCard;
