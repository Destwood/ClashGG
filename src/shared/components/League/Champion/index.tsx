import React from 'react';
import champ from 'assets/Camille.png';
import style from './index.module.scss';

export const Champion: React.FC = () => {
	return (
		<div className={style.champion}>
			<div className={style.champion__left}>
				<div className={style.champion__left__iconContainer}>
					<img className={style.champion__left__iconContainer__icon} src={champ} alt="" />
				</div>
				<div className={style.champion__info}>
					<p className={style.champion__name}>Camille</p>
					<p className={style.champion__performance}>
						-<span className={style.special_text}>19</span> LP
					</p>
				</div>
			</div>
			<div className={style.champion__middle}>
				<p className={style.special_text}>1.48 KDA</p>
				<p>7.3 / 7.5 / 3.9</p>
			</div>
			<div className={style.champion__right}>
				<p>64%</p>
				<p>11 games</p>
			</div>
		</div>
	);
};
