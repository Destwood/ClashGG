import React from 'react';
import champ from 'assets/Camille.png';
import { GameMockData } from 'utils/mock';
import style from './index.module.scss';

export const Game: React.FC = () => {
	return (
		<div className={style.container}>
			<div className={style.mainInfo}>
				<div className={style.queue}>
					<p>Normal Draft</p>
					<p>18 hours ago</p>
					<p>WIN 34:58</p>
				</div>
				<div className={style.champion}>champion</div>
				<div className={style.KDA}>
					<p>22 / 7 / 9</p>
					<p>4.43 KDA</p>
					<p>228 CS (6.5)</p>
					<p>19 vision</p>
				</div>
				<div className={style.build}>build</div>
				<div className={style.teams}>
					<div className={style.teamContainer}>
						{GameMockData.redSide.map((player, index) => (
							<div key={index} className={style.playerContainer}>
								{player}
							</div>
						))}
					</div>
					<div className={style.teamContainer}>
						{GameMockData.blueSide.map((player, index) => (
							<div key={index} className={style.playerContainer}>
								{player}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={style.moreInfo}>moreInfo</div>
		</div>
	);
};
