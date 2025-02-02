import React from 'react';
import { Compact, Showcase } from 'shared/components';
import { leagueTournamentSmallData } from 'utils/mock/Tournaments';
import style from './Overview.module.scss';

export const Overview: React.FC = () => {
	return (
		<div className={style.container}>
			<Showcase tournaments={leagueTournamentSmallData} />
			<Compact tournaments={leagueTournamentSmallData} title="Popular" />
			<Compact tournaments={leagueTournamentSmallData} title="Upcoming" />
			<Compact tournaments={leagueTournamentSmallData} title="Completed" />
		</div>
	);
};
