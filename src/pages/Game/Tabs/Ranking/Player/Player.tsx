import React from 'react';
import style from './Player.module.scss';

interface PlayerRowProps {
	number: number;
	icon: string;
	nickname: string;
	played: number;
	wins: number;
	rating: number;
}

export const Player: React.FC<PlayerRowProps> = ({ number, icon, nickname, played, wins, rating }) => {
	return (
		<div className={style.row}>
			<span>{number}</span>
			<div className={style.playerInfo}>
				<img src={icon} alt={`${nickname} avatar`} className={style.icon} />
				<p>{nickname}</p>
			</div>
			<span>{played}</span>
			<span>{wins}</span>
			<span>{rating}</span>
			<span>{Math.floor((wins / played) * 100)}</span>
		</div>
	);
};
