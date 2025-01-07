import React from 'react';
import copy from 'assets/copy.svg';
import { useAppSelector } from 'shared/hooks';
import { selectUser } from 'store/User';
import style from './UserItem.module.scss';

interface UserItemProps {
	userInfo: any;
	handleUsernameClick: (user: any) => void;
}

export const UserItem: React.FC<UserItemProps> = ({ userInfo, handleUsernameClick }) => {
	const userData = useAppSelector(selectUser);
	const user = userInfo.userData;

	if (!user) {
		return null;
	}

	return (
		<div className={`${style.userItem}`}>
			<span
				className={`${style.nickname} ${userData.username === user.username ? style.me : ''}`}
				onClick={() => {
					if (userData.username !== user.username) {
						handleUsernameClick(user);
					}
				}}
			>
				{user.username}
			</span>
			<button
				onClick={() => {
					navigator.clipboard
						.writeText(user.id)
						.then(() => console.log('User ID copied to clipboard'))
						.catch((err) => console.error('Error copying ID: ', err));
				}}
				className={style.copyButton}
			>
				<img className={style.copyIcon} src={copy} alt="" />
			</button>
		</div>
	);
};
