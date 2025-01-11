import React, { memo, useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectChatRooms } from 'store/ChatRoom';
import { selectAllChatUsers, selectChatUsers } from 'store/ChatUser';
import { selectUser } from 'store/User';
import { RoomsList } from './RoomsList/RoomsList';
import { UserList } from './UsersList/UserList';
import style from './ChatHeader.module.scss';

export const ChatHeader: React.FC = memo(() => {
	const dispatch = useAppDispatch();
	const activeRoom = useAppSelector(selectActiveRoom);
	const userList = useAppSelector(selectChatUsers).userList ?? [];
	const userListData = userList?.map((item: any) => item.userData);
	const allUsersList = useAppSelector(selectAllChatUsers).userList ?? [];
	const allUsersListData = allUsersList?.map((item: any) => item.userData);
	const chatRoomsList = useAppSelector(selectChatRooms).roomList;

	const userData = useAppSelector(selectUser);
	const [roomName, setRoomName] = useState<any>(activeRoom || '');

	function getPrivateRoomId(userId1: string, userId2: string) {
		return [userId1, userId2].sort().join('_');
	}

	const handleUsernameClick = (user: any) => {
		const roomId = getPrivateRoomId(userData.id, user.id);
		if (roomId !== activeRoom) {
			ChatServices.joinRoom(roomId, userData, user);
			dispatch(setActiveRoom(roomId));
			setRoomName(user.username);
		}
	};

	return (
		<div className={style.chatHeader}>
			<h1 className={style.roomTitle}>To: {roomName}</h1>
			<div className={style.tabs}>
				<div className={style.usersContainer}>
					<UserList listName="Users" userListData={userListData} handleUsernameClick={handleUsernameClick} />
				</div>
				<div className={style.allContainer}>
					<UserList listName="All" userListData={allUsersListData} handleUsernameClick={handleUsernameClick} />
				</div>
				<div className={style.RoomsContainer}>
					<RoomsList listName="Rooms" roomsListData={chatRoomsList} />
				</div>
			</div>
		</div>
	);
});
