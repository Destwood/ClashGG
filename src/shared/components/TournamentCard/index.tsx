import React from 'react';
import { useTranslation } from 'react-i18next';
import { TournamentCardVariant } from 'utils/enums';
import style from './TournamentCard.module.scss';

interface Tournament {
	tournamentImg: string;
	gamePicture: string;
	startTime: string;
	title: string;
	details: string[];
	organizerImg: string;
	organizerName: string;
}

interface TournamentCardProps {
	tournament: Tournament;
	variant: TournamentCardVariant;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, variant }) => {
	const { t } = useTranslation();
	const { tournamentImg, gamePicture, startTime, title, details, organizerImg, organizerName } = tournament;

	return (
		<div className={`${style.container} ${style[variant]}`}>
			<div className={style.imgContainer}>
				<div className={style.tournamentPictureContainer}>
					<img className={style.tournamentPicture} src={tournamentImg} alt="" />
					<img className={style.gameIcon} src={gamePicture} alt={t('tournamentCard.gameIconAlt')} />
				</div>
			</div>
			<div className={style.infoContainer}>
				<img className={style.organizerImgAlternative} src={organizerImg} alt={t('tournamentCard.organizerAlt')} />
				<div className={style.info}>
					<div className={style.startTimeContainer}>
						<span className={style.startTime}>{startTime}</span>
					</div>
					<h3 className={style.title}>{title}</h3>
					<div className={style.detailsContainer}>
            <span className={style.details}>
              <span className={style.detailItem}>
                {t('tournamentCard.hostedBy')} <span className={style.organizerName}>{organizerName}</span>
              </span>
							{details.map((detail, index) => (
								<span key={index} className={style.detailItem}>
                  {detail}
                </span>
							))}
            </span>
					</div>
					<div className={style.organizerContainer}>
						<img className={style.organizerImg} src={organizerImg} alt={t('tournamentCard.organizerAlt')} />
						<span className={style.organizer}>
              {t('tournamentCard.hostedBy')} <span className={style.organizerName}>{organizerName}</span>
            </span>
					</div>
				</div>
			</div>
		</div>
	);
};
