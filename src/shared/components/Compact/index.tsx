import React from 'react';
import { TournamentCard } from 'shared/components/index';
import { TournamentCardVariant } from 'utils/enums';
import style from './Compact.module.scss';

interface Tournament {
	tournamentImg: string;
	gamePicture: string;
	title: string;
	startTime: string;
	details: string[];
	organizerName: string;
	organizerImg: string;
}

interface SecondaryListProps {
	tournaments: Tournament[];
	title: string;
}

export const Compact: React.FC<SecondaryListProps> = ({ tournaments, title }) => {
	return (
		<div className={style.secondaryList}>
			<h3 className={style.title}>{title}</h3>
			<div className={style.listContainer}>
				{tournaments.map((tournament, index) => (
					<TournamentCard variant={TournamentCardVariant.small} key={index} tournament={tournament} />
				))}
			</div>
		</div>
	);
};
