import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataMatchPreviewCard from "./DataMatchPreviewCard";
import axios from "axios";

const DataMatchPreview = ({ selectedLeague }) => {
	const navigate = useNavigate();

	const [leagueGames, setLeagueGames] = useState([]);

	useEffect(() => {
		axios
			.get(
				`${import.meta.env.VITE_BACKEND_ENDPOINT}/games_info/${selectedLeague}`,
			)
			.then((res) => {
				setLeagueGames(res.data);
			});
	}, [selectedLeague]);

	return (
		leagueGames && (
			<main className="overflow-auto py-5 bg-background px-4">
				<ul
					className="grid list-none gap-x-3 gap-y-2.5
				px-2
				2xl:grid-cols-5
				xl:grid-cols-4
				lg:grid-cols-3
				md:grid-cols-2
				sm:grid-cols-1 overflow-x-hidden"
				>
					{leagueGames.map((item, idx) => {
						return (
							<DataMatchPreviewCard
								teamDireName={item.name_dire}
								teamSentName={item.name_sent}
								gameId={item.id}
								direWon={item.dire_won}
								duration={item.duration}
								data={item.data}
								key={item.id}
								onClick={() =>
									navigate(`/${selectedLeague}/${item.id}/data/0/`)
								}
							/>
						);
					})}
				</ul>
			</main>
		)
	);
};

export default DataMatchPreview;
