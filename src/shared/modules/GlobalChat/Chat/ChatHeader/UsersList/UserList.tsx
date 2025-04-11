import React from 'react';
import { MenuItem } from '@mui/material';
import copy from 'assets/copy.svg';
import { Dropdown } from 'shared/components/Dropdown';
import { useAppSelector } from 'shared/hooks';
import { selectUser } from 'store/User';
import { IRoomUser } from 'types';
import style from './UserList.module.scss';

interface userListData {
	userListData: IRoomUser[];
	listName: string;
	handleUsernameClick: (user: IRoomUser) => void;
}

export const UserList: React.FC<userListData> = ({ userListData, listName, handleUsernameClick }) => {
	const userData = useAppSelector(selectUser);

	const handleCopyUserId = (user: IRoomUser) => {
		navigator.clipboard
			.writeText(user.id)
			.then(() => console.log('User ID copied to clipboard'))
			.catch((err) => console.error('Error copying ID: ', err));
	};

	return (
		<div>
			{userListData && userListData.length && (
				<Dropdown listName={listName}>
					{userListData.map((item: IRoomUser) => (
						<MenuItem
							key={item.id}
							value={item.username}
							sx={
								userData.username === item.username
									? {
											'&.MuiMenuItem-root:hover': {
												cursor: 'default',
												backgroundColor: 'transparent',
											},
										}
									: {
											'&:hover': {
												cursor: 'pointer',
											},
										}
							}
						>
							<div className={style.itemContainer}>
								<span
									className={`${style.nickname} ${userData.username === item.username ? style.me : ''}`}
									onClick={() => {
										if (userData.username !== item.username) {
											handleUsernameClick(item);
										}
									}}
								>
									{item.username}
								</span>
								<button
									className={style.copyButton}
									onClick={() => {
										handleCopyUserId(item);
									}}
								>
									<img className={style.copyIcon} src={copy} alt="" />
								</button>
							</div>
						</MenuItem>
					))}
				</Dropdown>
			)}
		</div>
	);
};
