import React from 'react';
import { useTranslation } from 'react-i18next';
import { playersData } from 'utils/mock/Players';
import { Player } from './Player/Player';
import style from './Ranking.module.scss';

export const Ranking: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={style.container}>
			<h3 className={style.title}>{t('gamePage.tournaments.title')}</h3>
			<div className={style.grid}>
				<div className={style.header}>
					<span>{t('gamePage.tournaments.header.rank')}</span>
					<span>{t('gamePage.tournaments.header.nickname')}</span>
					<span>{t('gamePage.tournaments.header.gamesPlayed')}</span>
					<span>{t('gamePage.tournaments.header.wins')}</span>
					<span>{t('gamePage.tournaments.header.rating')}</span>
					<span>{t('gamePage.tournaments.header.winRate')}</span>
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
