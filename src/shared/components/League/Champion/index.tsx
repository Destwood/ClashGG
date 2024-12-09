import React from 'react';
import champ from 'assets/Camille.png';
import style from './index.module.scss';

export const Champion: React.FC = () => {
	return (
		<div className={style.container}>
			<div className={style.mainInfo}>
				<div className={style.iconContainer}>
					<img className={style.chamionIcon} src={champ} alt="" />
				</div>
				<div className={style.nameContainer}>
					<p className={style.name}>Camille</p>
					<p className={style.LP}>
						-<span className={style.specialText}>19</span> LP
					</p>
				</div>
			</div>
			<div className={style.KDA}>
				<p>
					<span className={style.specialText}>1.48 KDA</span>
				</p>
				<p>7.3 / 7.5 / 3.9</p>
			</div>
			<div className={style.wr}>
				<p>64%</p>
				<p>11 games</p>
			</div>
		</div>
	);
};
