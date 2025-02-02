import React from 'react';
import playedPfp from 'assets/defaultPfp.webp';
import { playersData } from 'utils/mock/Players';
import { Player } from './Player/Player';
import style from './Ranking.module.scss';

export const Ranking: React.FC = () => {
	return (
		<div className={style.container}>
			<h3 className={style.title}>League of Legends Top 100 Ranking</h3>
			<div className={style.grid}>
				<div className={style.header}>
					<span>#</span>
					<span>Nickname</span>
					<span>Games Played</span>
					<span>Wins</span>
					<span>Rating</span>
					<span>WinRate, %</span>
				</div>
				{playersData.map((player, index) => (
					<Player
						key={index}
						number={index + 1}
						icon={player.icon}
						nickname={player.nickname}
						played={player.played}
						wins={player.wins}
						rating={player.rating}
					/>
				))}
			</div>
		</div>
	);
};
