import React from 'react';
import { useAppSelector } from 'shared/hooks/store';
import { selectChatUsers } from 'store/ChatUser';
import { selectUser } from 'store/User';
import { UserItem } from './UserItem/UserItem';
import style from './UserList.module.scss';

interface UserListProps {
	handleUsernameClick: (user: any) => void;
}

export const UserList: React.FC<UserListProps> = ({ handleUsernameClick }) => {
	const roomUsersList = useAppSelector(selectChatUsers).userList;

	return (
		<div className={style.userList}>
			<h3>Users</h3>
			{roomUsersList && roomUsersList.length > 0 ? (
				roomUsersList.map((user, index) => (
					<UserItem key={index} userInfo={user} handleUsernameClick={handleUsernameClick} />
				))
			) : (
				<p>No users online</p>
			)}
		</div>
	);
};
