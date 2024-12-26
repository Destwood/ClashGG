import React, { useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { Button } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectChatUsers } from 'store/ChatUser';
import { selectUser } from 'store/User';
import { ChatHeaderToDisplay } from 'utils/enums/chat';
import { RoomsList } from './RoomsList/RoomsList';
import style from './ChatHeader.module.scss';

export const ChatHeader: React.FC = () => {
	const dispatch = useAppDispatch();
	const activeRoom = useAppSelector(selectActiveRoom);
	const userData = useAppSelector(selectUser);

	const roomUsersList = useAppSelector(selectChatUsers).userList;
	const [toDisplay, setToDisplay] = useState<'rooms' | 'users' | null>(null);
	const [roomName, setRoomName] = useState<string>(activeRoom);

	const handleTabChange = (tab: 'users' | 'rooms' | null) => {
		setToDisplay(toDisplay === tab ? null : tab);
	};

	function getPrivateRoomName(userId1: string, userId2: string) {
		return [userId1, userId2].sort().join('_');
	}

	const handleUsernameClick = (user: any) => {
		console.log(user.user.username);
		const roomPropName = getPrivateRoomName(userData.id, user.user.id);
		ChatServices.joinRoom(roomPropName, userData, user.user);
		dispatch(setActiveRoom(getPrivateRoomName(userData.id, user.user.id)));
		setRoomName(`to ${user.user.username}`);
	};

	return (
		<div className={style.chatHeader}>
			<h1>{roomName}</h1>
			<div className={style.tabs}>
				<Button onClick={() => handleTabChange('users')} type="contained">
					{toDisplay === 'users' ? 'Hide Users' : 'Show Users'}
				</Button>
				<Button onClick={() => handleTabChange('rooms')} type="contained">
					{toDisplay === 'rooms' ? 'Hide Rooms' : 'Show Rooms'}
				</Button>
			</div>

			<div className={style.listContainer}>
				{toDisplay && (
					<div className={style.list}>
						{toDisplay === ChatHeaderToDisplay.users && (
							<div className={style.userList}>
								<h3>Users</h3>
								{roomUsersList ? (
									roomUsersList.map((user: any, index) => (
										<div
											key={index}
											className={`${style.userItem} ${user.status === 'online' ? style.online : style.offline}`}
										>
											<span
												className={`${style.nickname} ${userData.username === user.user.username ? style.me : ''}`}
												onClick={() => {
													handleUsernameClick(user);
												}}
											>
												{user.user.username}
											</span>
											<button
												onClick={() => {
													navigator.clipboard
														.writeText(user.user.id)
														.then(() => {
															console.log('User ID copied to clipboard');
														})
														.catch((err) => {
															console.error('Error copying ID: ', err);
														});
												}}
												className={style.copyButton}
											>
												Copy ID
											</button>
										</div>
									))
								) : (
									<p>No users online</p>
								)}
							</div>
						)}

						{toDisplay === ChatHeaderToDisplay.rooms && <RoomsList onRoomClick={setRoomName} />}
					</div>
				)}
			</div>
		</div>
	);
};
