import React from 'react';
import discord from 'assets/discord.svg';
import facebook from 'assets/facebook.svg';
import twitch from 'assets/twitch.svg';
import Modal from 'shared/components/Modal/Modal';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { setAuthType } from 'store/slices/AuthModalSlice';
import AuthModalOptions from 'utils/constants/AuthModalOptions';
import { Auth } from 'utils/enums/auth';
import style from './AuthModal.module.scss';

const AuthModal = () => {
	const dispatch = useAppDispatch();
	const type = useAppSelector((state) => state.authModal.typeOfModal);
	console.log(type);
	const textData = AuthModalOptions.signUp;
	const changeAuthType = () => {
		const modalToDisplay = type === Auth.signUp ? Auth.logIn : Auth.signUp;
		dispatch(setAuthType(modalToDisplay));
	};

	const handleSubmit = () => {
		console.log('handleSubmit');
	};

	const handleClose = () => {
		console.log('handle');
	};

	return (
		<Modal title="title" subtitle="subtitle" onClose={handleClose} onSubmit={handleSubmit}>
			<div className={style.heading}>
				<p className={style.title}>{textData.title}</p>
				<p className={style.subTitle}>
					{textData.subTitle}{' '}
					<span className={style.altButton} onClick={changeAuthType}>
						{textData.altText}
					</span>
				</p>
			</div>

			<div className={style.mainContent}>
				<div className={style.socialLogin}>
					<button className={`${style.linkButton} ${style.discordButton}`}>
						<img className={style.icon} src={discord} alt="discordLogo" />
						{textData.text} with discord
					</button>
					<button className={`${style.linkButton} ${style.twitchButton}`}>
						<img className={style.icon} src={twitch} alt="twitchLogo" />
						{textData.text} with twitch
					</button>
					<button className={`${style.linkButton} ${style.facebookButton}`}>
						<img className={style.icon} src={facebook} alt="twitchLogo" />
						{textData.text} with facebook
					</button>
				</div>
				<div className={style.form}>Some form here</div>
			</div>
		</Modal>
	);
};
export default AuthModal;
