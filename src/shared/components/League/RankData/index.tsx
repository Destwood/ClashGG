import React from 'react';
import { useTranslation } from 'react-i18next';
import rank from 'assets/diamond.png';
import style from './index.module.scss';

interface RankData {
	tier: string;
	rank: string;
	leaguePoints: number;
	wins: number;
	losses: number;
	winRate: string;
	type: string;
}

interface RankedInfoProps {
	rankData: RankData;
}

export const RankData: React.FC<RankedInfoProps> = ({ rankData }) => {
	const { t } = useTranslation();

	return (
		<>
			<div className={style.statOverview}>
				<h3 className={style.statTitle}>
					{t('rankData.ranked')} {rankData.type}
				</h3>
				<p className={style.statInfo}>
					{rankData.tier} {rankData.rank}
				</p>
			</div>
			<div className={style.rank}>
				<img className={style.rankIcon} src={rank} alt="Rank" />
				<div className={style.rankInfo}>
					<h4 className={style.rankName}>
						{rankData.tier} {rankData.rank}
					</h4>
					<p className={style.rankLeaguePoint}>{rankData.leaguePoints} LP</p>
				</div>
				<div className={style.winRateInfo}>
					<p className={style.wrGames}>
						{rankData.wins}W {rankData.losses}L
					</p>
					<p className={style.wrPercent}>
						{rankData.winRate} {t('rankData.winRate')}
					</p>
				</div>
			</div>
		</>
	);
};
