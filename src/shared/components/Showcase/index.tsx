import React from 'react';
import { useTranslation } from 'react-i18next';
import { TournamentCard } from 'shared/components/index';
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
	const { t } = useTranslation();

	return (
		<div className={style.container}>
			<h4 className={style.title}>{t('gamePage.overview.recommended')}</h4>
			<TournamentCard variant={TournamentCardVariant.big} tournament={tournaments[0]} />
			<div className={style.secondaryList}>
				{tournaments.slice(1).map((tournament, index) => (
					<TournamentCard variant={TournamentCardVariant.medium} key={index} tournament={tournament} />
				))}
			</div>
		</div>
	);
};
