import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPfp from 'assets/defaultPfp.webp';
import defaultBanner from 'assets/leagueBanner.webp';
import defaultGame from 'assets/leagueMainImg.webp';
import { Button } from 'shared/components';
import { selectActiveGame } from 'store/ActiveGame';
import { useAppSelector } from 'store/hooks';
import { Ladder } from './Tabs/Ladder/Ladder';
import { Overview } from './Tabs/Overview/Overview';
import { Tournaments } from './Tabs/Tournaments/Tournaments';
import style from './Game.module.scss';

const gameData = {
	gameName: 'League of Legends',
	userName: 'Destwood',
	profileAction: 'change profile',
	buttonText: 'create',
	tabs: ['Overview', 'Tournaments', 'Ladder'],
};

export const Game: React.FC = () => {
	const gameInfo = useAppSelector(selectActiveGame);
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div className={style.container}>
			<div className={style.mainInfo}>
				<div className={style.bannerContainer}>
					<img className={style.banner} src={defaultBanner} alt="" />
				</div>

				<div className={style.content}>
					<div className={style.gameInfo}>
						<Link to="/game">
							<img className={style.gameImg} src={defaultGame} alt="" />
						</Link>
						<div className={style.rightSideContainer}>
							<div className={style.rightSide}>
								<h3 className={style.gameName}>{gameData.gameName}</h3>
								<div className={style.profileInfo}>
									<img className={style.pfp} src={defaultPfp} alt="" />
									<div>
										<p>{gameData.userName}</p>
										<span className={style.changeProfile}>{gameData.profileAction}</span>
									</div>
								</div>
							</div>

							<div className={style.createButton}>
								<Button type="contained">{gameData.buttonText}</Button>
							</div>
						</div>
					</div>

					<div className={style.tabsList}>
						<div className={style.bottomLine} />
						<div className={style.tabsContainer}>
							{gameData.tabs.map((tab, index) => (
								<div
									key={index}
									className={`${style.tabName} ${activeTab === index ? style.active : ''}`}
									onClick={() => handleTabClick(index)}
								>
									{tab}
								</div>
							))}
						</div>
					</div>
					<div className={style.tabContainer}>
						{activeTab === 0 && <Ladder />}
						{activeTab === 1 && <Tournaments />}
						{activeTab === 2 && <Overview />}
					</div>
				</div>
			</div>
		</div>
	);
};
