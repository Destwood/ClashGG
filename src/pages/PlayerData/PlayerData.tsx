import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import summonerIconDef from 'assets/summonerIcon.png';
import { RiotServices } from 'services/riot.services';
import { Champion, Game } from 'shared/components';
import { RankData } from 'shared/components/League/RankData';
import style from './PlayerData.module.scss';

const mockRanks = [
	{
		type: 'Solo',
		tier: 'Diamond',
		rank: '4',
		leaguePoints: 73,
		wins: 41,
		losses: 44,
		winRate: '48%',
	},
	{
		type: 'Flex',
		tier: 'Platinum',
		rank: '3',
		leaguePoints: 20,
		wins: 22,
		losses: 18,
		winRate: '55%',
	},
];

export const PlayerData: React.FC = () => {
	const { t } = useTranslation();

	// TODO require working api, will add this later
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const data = await RiotServices.fetchSummonerData('Destwood', 'toxic');
	// 			console.log(data);
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<div className={style.container}>
			<div className={style.mainInfo}>
				<div className={style.iconContainer}>
					<p className={style.summonerLevel}>883</p>
					<img className={style.summonerIcon} src={summonerIconDef} alt="" />
				</div>
				<div className={style.infoContainer}>
					<div className="">
						<h1>
							Destwood <span className={style.tag}>#toxic</span>
						</h1>
						<p>{t('playerData.summonerLevel')} #8111</p>
					</div>
				</div>
			</div>
			<div className={style.overview}>
				<div className={style.stats}>
					{mockRanks.map((rankData, index) => (
						<div className={style.dataContainer} key={index}>
							<RankData rankData={rankData} />
						</div>
					))}

					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>{t('playerData.championStats')}</h3>
							<p className={style.statInfo}>{t('playerData.allRanked')}</p>
						</div>
						{[1, 2, 3].map((_, index) => (
							<div key={index} className={style.championContainer}>
								<Champion />
							</div>
						))}
					</div>
				</div>
				<div className={style.history}>
					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>{t('playerData.matchHistory')}</h3>
							<p className={style.statInfo}>---</p>
						</div>
						<div className={style.stats} />
						<div className={style.games}>
							<Game />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
