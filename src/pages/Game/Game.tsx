import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import defaultPfp from 'assets/defaultPfp.webp';
import defaultBanner from 'assets/leagueBanner.webp';
import defaultGame from 'assets/leagueMainImg.webp';
import { Button } from 'shared/components';
import { Banner } from 'shared/components/Banner';
import { Overview } from './Tabs/Overview/Overview';
import { Ranking } from './Tabs/Ranking/Ranking';
import { Tournaments } from './Tabs/Tournaments/Tournaments';
import style from './Game.module.scss';

export const Game: React.FC = () => {
	const theme = useTheme();
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div className={style.container}>
			<div className={style.mainInfo}>
				<Banner bannerImage={defaultBanner} />

				<div className={style.content}>
					<div className={style.gameInfo}>
						<Link to="/game">
							<img className={style.gameImg} src={defaultGame} alt="" />
						</Link>
						<div className={style.rightSideContainer}>
							<div className={style.rightSide}>
								<h3 className={style.gameName}>{t('gamePage.gameName')}</h3>
								<div className={style.profileInfo}>
									<img className={style.pfp} src={defaultPfp} alt="" />
									<div>
										<p>Destwood</p>
										<span className={style.changeProfile}>{t('gamePage.profileAction')}</span>
									</div>
								</div>
							</div>

							<div className={style.createButton}>
								<Button color={theme.palette.info.main} type="contained">
									{t('gamePage.buttonText')}
								</Button>
							</div>
						</div>
					</div>

					<div className={style.tabsList}>
						<div className={style.bottomLine} />
						<div className={style.tabsContainer}>
							{['overview', 'tournaments', 'ranking'].map((tab, index) => (
								<div
									key={index}
									className={`${style.tabName} ${activeTab === index ? style.active : ''}`}
									onClick={() => handleTabClick(index)}
								>
									{t(`gamePage.tabs.${tab}`)}
								</div>
							))}
						</div>
					</div>
					<div className={style.tabContent}>
						{activeTab === 0 && <Overview />}
						{activeTab === 1 && <Tournaments />}
						{activeTab === 2 && <Ranking />}
					</div>
				</div>
			</div>
		</div>
	);
};
