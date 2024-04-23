import React from "react";

import MenuResponse from "/menuResp.json";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const LeagueItem = ({
	laegueName,
	leagueId,
	dateStart,
	dateEnd,
	selected,
	routeNavigate,
}) => {
	const selectedCard = selected ? "border-primary bg-card/75" : "bg-muted/75";
	const selectedText = selected ? "text-primary" : "text-secondary";
	const selectedDate = selected
		? "text-card-foreground"
		: "text-muted-foreground";

	return (
		<li
			className={`mx-1 my-2 p-1.5 shadow-sm rounded-lg border border-current 
			whitespace-normal ${selectedCard} 
			hover:ring-2 hover:ring-primary hover:ring-inset cursor-pointer`}
			onClick={() => routeNavigate(`/${leagueId}`)}
			onKeyUp={() => routeNavigate(`/${leagueId}`)}
		>
			<div className={`min-h-[47px] ${selectedText}`}>
				<h2>{laegueName}</h2>
			</div>
			<div>
				<p className={`text-sm text-right ${selectedDate}`}>
					{dateStart} - {dateEnd}
				</p>
			</div>
		</li>
	);
};

const Header = ({ selected }) => {
	const { leagueMenu } = useSelector((state) => state.menu);

	const { routeSelectedLeague } = useParams();
	const navigate = useNavigate();

	return (
		<header className="sticky top-0 z-10 h-[111px] border-b px-2">
			<ul
				className="grid grid-flow-col list-none grid-rows-1 px-4]
			overflow-x-scroll auto-cols-[200px]"
			>
				{leagueMenu.map((item, idx) => {
					return (
						<LeagueItem
							routeNavigate={navigate}
							laegueName={item.label}
							dateStart={"07/08/56"}
							dateEnd={"07/08/56"}
							leagueId={item.id}
							selected={routeSelectedLeague === item.id.toString()}
							key={item.id}
						/>
					);
				})}
			</ul>
		</header>
	);
};

export default Header;
