import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compact, Showcase } from 'shared/components';
import { leagueTournamentSmallData } from 'utils/mock/Tournaments';
import style from './Overview.module.scss';

export const Overview: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={style.container}>
			<Showcase tournaments={leagueTournamentSmallData} />
			<Compact tournaments={leagueTournamentSmallData} title={t('gamePage.overview.popular')} />
			<Compact tournaments={leagueTournamentSmallData} title={t('gamePage.overview.upcoming')} />
			<Compact tournaments={leagueTournamentSmallData} title={t('gamePage.overview.completed')} />
		</div>
	);
};
