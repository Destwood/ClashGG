import React from 'react';
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
	const { tournamentImg, gamePicture, startTime, title, details, organizerImg, organizerName } = tournament;

	return (
		<div className={`${style.container} ${style[variant]}`}>
			<div className={style.imgContainer}>
				<div className={style.tournamentPictureContainer}>
					<img className={style.tournamentPicture} src={tournamentImg} alt="" />
					<img className={style.gameIcon} src={gamePicture} alt="Game icon" />
				</div>
			</div>
			<div className={style.infoContainer}>
				<img className={style.organizerImgAlternative} src={organizerImg} alt="Organizer" />
				<div className={style.info}>
					<div className={style.startTimeContainer}>
						<span className={style.startTime}>{startTime}</span>
					</div>
					<h3 className={style.title}>{title}</h3>
					<div className={style.detailsContainer}>
						<span className={style.details}>
							<span className={style.detailItem}>
								Hosted by <span className={style.organizerName}>{organizerName}</span>
							</span>
							{details.map((detail, index) => (
								<span key={index} className={style.detailItem}>
									{detail}
								</span>
							))}
						</span>
					</div>
					<div className={style.organizerContainer}>
						<img className={style.organizerImg} src={organizerImg} alt="Organizer" />
						<span className={style.organizer}>
							Hosted by <span className={style.organizerName}>{organizerName}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
