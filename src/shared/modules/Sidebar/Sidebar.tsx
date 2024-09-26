import React from 'react';
import LoL from 'assets/temp/LoL.svg';
import RocketLeague from 'assets/temp/RocketLeague.svg';
import tft from 'assets/temp/tft.webp';
import { setActiveGame } from 'store/ActiveGame/Slice';
import { useAppDispatch } from 'store/hooks';
import style from './Sidebar.module.scss';

// TODO
// import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
	// TODO, waiting for data
}

const Sidebar: React.FC<Props> = () => {
	const dispatch = useAppDispatch();

	const handleGameClick =
		(game: string) =>
		(event: React.MouseEvent<HTMLDivElement>): void => {
			dispatch(setActiveGame(game));
		};

	// TODO
	// const API_URL = 'https://api.challengermode.com/graphql'; // Replace with actual API URL
	// const API_KEY = '';
	//
	// const fetchTournaments = async () => {
	//     const query = `
	//     query {
	//         tournaments {
	//             id
	//             name
	//             startTime
	//             endTime
	//         }
	//     }
	// `;
	//
	//     try {
	//         const response = await axios.post(API_URL, { query }, {
	//             headers: {
	//                 'Authorization': `Bearer ${API_KEY}`,
	//                 'Content-Type': 'application/json',
	//             },
	//         });
	//
	//         console.log(response.data);
	//     } catch (error) {
	//         console.error('Помилка при отриманні турнірів:', error);
	//     }
	// };
	//
	// fetchTournaments();

	return (
		<div className={style.sidebar}>
			<div className={style.gameContainer} onClick={handleGameClick('LoL')}>
				<img className={style.icon} src={LoL} alt="League of Legends img" />
			</div>
			<div className={style.gameContainer} onClick={handleGameClick('RocketLeague')}>
				<img className={style.icon} src={RocketLeague} alt="Rocket League img" />
			</div>
			<div className={style.gameContainer} onClick={handleGameClick('TFT')}>
				<img className={style.icon} src={tft} alt="TFT img" />
			</div>
		</div>
	);
};

export default Sidebar;
