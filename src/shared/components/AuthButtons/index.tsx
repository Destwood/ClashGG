import React from 'react';
import discord from '../../../assets/discord.svg';
import facebook from '../../../assets/facebook.svg';
import twitch from '../../../assets/twitch.svg';
import { Button } from '../Button';
import style from './index.module.scss';

interface Props {
	name: string;
}

export const AuthButtons: React.FC<Props> = ({ name }) => {
	return (
		<>
			<div className={style.buttonContainer}>
				<Button color="#434DE4" textColor="#fff" type="filled">
					<img className={style.icon} src={discord} alt="discordLogo" />
					{name} with discord
				</Button>
			</div>
			<div className={style.buttonContainer}>
				<Button color="#6e31df" textColor="#fff" type="filled">
					<img className={style.icon} src={twitch} alt="twitchLogo" />
					{name} with twitch
				</Button>
			</div>
			<div className={style.buttonContainer}>
				<Button color="#1876f2" textColor="#fff" type="filled">
					<img className={style.icon} src={facebook} alt="twitchLogo" />
					<p>{name} with facebook</p>
				</Button>
			</div>
		</>
	);
};
