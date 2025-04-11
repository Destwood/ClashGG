import React from 'react';
import { TournamentCard } from 'shared/components';
import { TournamentCardVariant } from 'utils/enums';
import { leagueTournamentBigData } from 'utils/mock/Tournaments';
import style from './Tournaments.module.scss';

export const Tournaments: React.FC = () => {
	return (
		<div className={style.secondaryList}>
			<div className={style.listContainer}>
				{leagueTournamentBigData.map((tournament, index) => (
					<TournamentCard variant={TournamentCardVariant.minimal} key={index} tournament={tournament} />
				))}
			</div>
		</div>
	);
};
