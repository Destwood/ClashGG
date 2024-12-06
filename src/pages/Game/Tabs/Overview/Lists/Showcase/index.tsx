import React from 'react';
import { TournamentCard } from 'shared/components';
import { TournamentCardVariant } from 'utils/enums';
import style from './Showcase.module.scss';

interface Tournament {
	tournamentImg: string;
	gamePicture: string;
	title: string;
	startTime: string;
	details: string[];
	organizerImg: string;
	organizerName: string;
}

interface CardProps {
	tournaments: Tournament[];
}

export const Showcase: React.FC<CardProps> = ({ tournaments }) => {
	return (
		<div className={style.container}>
			<h4 className={style.title}>Recommended tournaments</h4>
			<TournamentCard variant={TournamentCardVariant.big} tournament={tournaments[0]} />
			<div className={style.secondaryList}>
				{tournaments.slice(1).map((tournament, index) => (
					<TournamentCard variant={TournamentCardVariant.medium} key={index} tournament={tournament} />
				))}
			</div>
		</div>
	);
};
