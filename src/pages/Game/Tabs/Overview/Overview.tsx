import React from 'react';
import ALLstart from 'assets/ALLstars.webp';
import leagueIcon from 'assets/temp/LoL.svg';
import tournamentImage3 from 'assets/Tournament/0c5cbc1d-5a63-42a4-9f91-08db10f5100b_640_360.webp';
import tournamentImage1 from 'assets/Tournament/669aeb8b-fd32-42b9-2d83-08da1f174291_320_180.webp';
import tournamentImage2 from 'assets/Tournament/b8db388c-c490-47e4-9f9a-08db10f5100b_640_360.webp';
import tournamentImage4 from 'assets/Tournament/c7c28150-0775-4a89-0027-08dc4dd732f6_320_180.webp';
import { Compact, Showcase } from './Lists';
import style from './Overview.module.scss';

const tournamentData = [
	{
		tournamentImg: tournamentImage1,
		gamePicture: leagueIcon,
		startTime: 'Time to start',
		title: 'Champions of the abyss',
		details: ['EUNE', '5v5', '$5', '16 spots'],
		organizerImg: ALLstart,
		organizerName: 'LoL Allstars',
	},
	{
		tournamentImg: tournamentImage2,
		gamePicture: leagueIcon,
		startTime: 'Tomorrow, 18:00',
		title: 'Aram Extravaganza',
		details: ['EUW', '5v5', '€3.00', '8 spots'],
		organizerImg: ALLstart,
		organizerName: 'LoL Allstars',
	},
	{
		tournamentImg: tournamentImage3,
		gamePicture: leagueIcon,
		startTime: 'Tomorrow, 20:00',
		title: 'Allstars Duo',
		details: ['EUW', '2v2', '€8.00', '8 spots'],
		organizerImg: ALLstart,
		organizerName: 'LoL Allstars',
	},
	{
		tournamentImg: tournamentImage4,
		gamePicture: leagueIcon,
		startTime: 'Tomorrow, 21:30',
		title: 'Legends of the Rift Tournament',
		details: ['EUW', '5v5', '€5.00', '16 spots'],
		organizerImg: ALLstart,
		organizerName: 'LoL Allstars',
	},
];

// TODO - move both lists to shared folder

export const Overview: React.FC = () => {
	return (
		<div className={style.container}>
			<Showcase tournaments={tournamentData} />
			<Compact tournaments={tournamentData} title="Popular" />
			<Compact tournaments={tournamentData} title="Upcoming" />
			<Compact tournaments={tournamentData} title="Completed" />
		</div>
	);
};
