import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import bannerImg from 'assets/homepageBanner.webp';
import { Compact } from 'shared/components';
import { Banner } from 'shared/components/Banner';
import {
	D2TournamentSmallData,
	leagueTournamentSmallData,
	PUBGTournamentSmallData,
	R6SiegeTournamentSmallData,
	RLTournamentSmallData,
	TFTTournamentSmallData,
} from 'utils/mock/Tournaments';
import style from './index.module.scss';

export const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Box className={style.wrapper}>
			<Banner bannerImage={bannerImg} />
			<Box className={style.content}>
				<h1>{t('homePage.title')}</h1>
				<Compact tournaments={leagueTournamentSmallData} title={t('homePage.tournamentsList')} />
				<Compact tournaments={TFTTournamentSmallData} title="Teamfight tactics" />
				<Compact tournaments={PUBGTournamentSmallData} title="PUBG" />
				<Compact tournaments={R6SiegeTournamentSmallData} title="Raibow 6 Siege" />
				<Compact tournaments={RLTournamentSmallData} title="Rocket league" />
				<Compact tournaments={D2TournamentSmallData} title="Dota 2" />
			</Box>
		</Box>
	);
};
