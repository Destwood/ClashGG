import React, { useEffect, useState } from 'react';
import championIcon from 'assets/Camille.png';
import rank from 'assets/diamond.png';
import summonerIconDef from 'assets/summonerIcon.png';
import { RiotServices } from 'services/riot.serviceі';
import { Champion, Game } from 'shared/components';
import style from './PlayerData.module.scss';

export const PlayerData: React.FC = () => {
	// TODO
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await RiotServices.fetchSummonerData('Destwood', 'toxic');
				console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	// fetch(
	// 	// eslint-disable-next-line max-len
	// eslint-disable-next-line max-len
	// 	'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Destwood/toxic?api_key=RGAPI-a2510bea-cca8-4f24-8eae-57cf1d3a01e2',
	// 	{
	// 		method: 'GET',
	// 		mode: 'no-cors',
	// 	}
	// )
	// 	.then((response) => console.log('response: ', response))
	// 	.catch((error) => console.error('Помилка:', error));

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
						<p>Ladder rank is #8111</p>
					</div>
				</div>
			</div>
			<div className={style.overview}>
				<div className={style.stats}>
					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>Ranked Solo</h3>
							<p className={style.statInfo}>unranked</p>
						</div>
						<div className={style.rank}>
							<img className={style.rankIcon} src={rank} alt="" />
							<div className={style.rankInfo}>
								<h4 className={style.rankName}>Diamond 4</h4>
								<p className={style.rankLP}>73 LP</p>
							</div>
							<div className={style.wrInfo}>
								<p className={style.wrGames}>41W 44L</p>
								<p className={style.wrPercent}>48% Win Rate</p>
							</div>
						</div>
					</div>
					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>Ranked Flex</h3>
							<p className={style.statInfo}>unranked</p>
						</div>
					</div>
					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>Champion Stats</h3>
							<p className={style.statInfo}>All Ranked</p>
						</div>
						<div className={style.championsList}>
							<div className={style.championContainer}>
								<Champion />
							</div>
							<div className={style.championContainer}>
								<Champion />
							</div>
							<div className={style.championContainer}>
								<Champion />
							</div>
						</div>
					</div>
				</div>
				<div className={style.history}>
					<div className={style.dataContainer}>
						<div className={style.statOverview}>
							<h3 className={style.statTitle}>Match History</h3>
							<p className={style.statInfo}>---</p>
						</div>
						<div className={style.stats}>TODO will do later, require charts library</div>
						<div className={style.games}>
							<Game />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
