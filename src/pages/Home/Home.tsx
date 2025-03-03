import React from 'react';
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
	return (
		<Box className={style.wrapper}>
			<Banner bannerImage={bannerImg} />
			<Box className={style.content}>
				<h1>Make your own legend</h1>
				<Compact tournaments={leagueTournamentSmallData} title="Tournaments for you" />
				<Compact tournaments={TFTTournamentSmallData} title="Teamfight tactics" />
				<Compact tournaments={PUBGTournamentSmallData} title="PUBG" />
				<Compact tournaments={R6SiegeTournamentSmallData} title="Raibow 6 Siege" />
				<Compact tournaments={RLTournamentSmallData} title="Rocket league" />
				<Compact tournaments={D2TournamentSmallData} title="Dota 2" />
			</Box>
		</Box>
	);
};
