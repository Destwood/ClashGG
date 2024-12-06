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
			<img src={icon} alt={`${nickname} avatar`} className={style.icon} />
			<span>{nickname}</span>
			<span>{played}</span>
			<span>{wins}</span>
			<span>{rating}</span>
		</div>
	);
};
