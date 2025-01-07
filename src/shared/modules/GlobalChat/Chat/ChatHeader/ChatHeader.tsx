import React, { useEffect, useRef, useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { Button } from 'shared/components';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectUser } from 'store/User';
import { ChatHeaderToDisplay } from 'utils/enums/chat';
import { RoomsList } from './RoomsList/RoomsList';
import { UserList } from './UsersList/UserList';
import style from './ChatHeader.module.scss';

export const ChatHeader: React.FC = () => {
	const dispatch = useAppDispatch();
	const activeRoom = useAppSelector(selectActiveRoom);
	const userData = useAppSelector(selectUser);

	const [toDisplay, setToDisplay] = useState<'rooms' | 'users' | null>(null);
	const [roomName, setRoomName] = useState<any>(activeRoom || '');

	const userListRef = useRef<HTMLDivElement | null>(null);
	const tabsButtonRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isListClicked = userListRef.current && !userListRef.current.contains(event.target as Node);
			const isTabsButton = tabsButtonRef.current && !tabsButtonRef.current.contains(event.target as Node);
			if (isListClicked && isTabsButton) {
				setToDisplay(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleTabChange = (tab: 'users' | 'rooms' | null) => {
		setToDisplay(toDisplay === tab ? null : tab);
	};

	function getPrivateRoomId(userId1: string, userId2: string) {
		return [userId1, userId2].sort().join('_');
	}

	const handleUsernameClick = (user: any) => {
		const roomId = getPrivateRoomId(userData.id, user.id);
		if (roomId !== activeRoom) {
			ChatServices.joinRoom(roomId, userData, user);
			dispatch(setActiveRoom(roomId));
			setRoomName(`to ${user.username}`);
		}
	};

	return (
		<div className={style.chatHeader}>
			<h1>{roomName}</h1>
			<div className={style.tabs} ref={tabsButtonRef}>
				<Button onClick={() => handleTabChange('users')} type="contained">
					{toDisplay === 'users' ? 'Hide Users' : 'Show Users'}
				</Button>
				<Button onClick={() => handleTabChange('rooms')} type="contained">
					{toDisplay === 'rooms' ? 'Hide Rooms' : 'Show Rooms'}
				</Button>
			</div>

			<div className={style.listContainer}>
				{toDisplay && (
					<div className={style.list} ref={userListRef}>
						{toDisplay === ChatHeaderToDisplay.users && (
							<div className={style.userList}>
								{toDisplay === ChatHeaderToDisplay.users && <UserList handleUsernameClick={handleUsernameClick} />}
							</div>
						)}

						{toDisplay === ChatHeaderToDisplay.rooms && <RoomsList onRoomClick={(room) => setRoomName(room)} />}
					</div>
				)}
			</div>
		</div>
	);
};
