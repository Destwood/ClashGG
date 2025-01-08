import React, { useEffect, useRef, useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectChatRooms } from 'store/ChatRoom';
import { setUserList } from 'store/ChatUser';
import { selectUser } from 'store/User';
import { IRoom } from 'types';
import { ChatHeaderToDisplay } from 'utils/enums/chat';
import { RoomsList } from './RoomsList/RoomsList';
import { UserList } from './UsersList/UserList';
import style from './ChatHeader.module.scss';
import UIStyles from './uiverseStyles.module.scss';

export const ChatHeader: React.FC = () => {
	const dispatch = useAppDispatch();
	const activeRoom = useAppSelector(selectActiveRoom);
	const chatRoomsList = useAppSelector(selectChatRooms).roomList;
	const userData = useAppSelector(selectUser);

	const [toDisplay, setToDisplay] = useState<ChatHeaderToDisplay>(ChatHeaderToDisplay.none);
	const [roomName, setRoomName] = useState<any>(activeRoom || '');

	const userListRef = useRef<HTMLDivElement | null>(null);
	const tabsButtonRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isListClicked = userListRef.current && !userListRef.current.contains(event.target as Node);
			const isTabsButton = tabsButtonRef.current && !tabsButtonRef.current.contains(event.target as Node);
			if (isListClicked && isTabsButton) {
				setToDisplay(ChatHeaderToDisplay.none);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleTabChange = (tab: ChatHeaderToDisplay) => {
		setToDisplay(toDisplay === tab ? ChatHeaderToDisplay.none : tab);
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
			<h1 className={style.roomTitle}>{roomName}</h1>
			<div className={style.tabs} ref={tabsButtonRef}>
				<div className={UIStyles.customCheckBoxHolder}>
					<div className="">
						<input
							className={UIStyles.customCheckBoxInput}
							id="usersCheckbox"
							type="checkbox"
							name="chatHeader"
							checked={toDisplay === ChatHeaderToDisplay.users}
							onClick={() => {
								const roomUsers = chatRoomsList.find((room: IRoom) => room.id === activeRoom)?.activeUsers || [];
								dispatch(setUserList(roomUsers));
								handleTabChange(ChatHeaderToDisplay.users);
							}}
						/>
						<label className={UIStyles.customCheckBoxWrapper} htmlFor="usersCheckbox">
							<div className={UIStyles.customCheckBox}>
								<div className={UIStyles.inner}>Users</div>
							</div>
						</label>
					</div>
					<div className="">
						<input
							className={UIStyles.customCheckBoxInput}
							id="allUsersCheckbox"
							type="checkbox"
							name="chatHeader"
							checked={toDisplay === ChatHeaderToDisplay.allUsers}
							onClick={() => {
								handleTabChange(ChatHeaderToDisplay.allUsers);
								dispatch(setUserList(chatRoomsList[0].allUsers));
							}}
						/>
						<label className={UIStyles.customCheckBoxWrapper} htmlFor="allUsersCheckbox">
							<div className={UIStyles.customCheckBox}>
								<div className={UIStyles.inner}>All</div>
							</div>
						</label>
					</div>
					<div className="">
						<input
							className={UIStyles.customCheckBoxInput}
							id="roomsCheckbox"
							type="checkbox"
							name="chatHeader"
							checked={toDisplay === ChatHeaderToDisplay.rooms}
							onClick={() => handleTabChange(ChatHeaderToDisplay.rooms)}
						/>
						<label className={UIStyles.customCheckBoxWrapper} htmlFor="roomsCheckbox">
							<div className={UIStyles.customCheckBox}>
								<div className={UIStyles.inner}>Rooms</div>
							</div>
						</label>
					</div>
					<div className="">
						<input
							className={UIStyles.customCheckBoxInput}
							id="checkboxForX"
							type="checkbox"
							name="chatHeader"
							checked={toDisplay === ChatHeaderToDisplay.none}
							onClick={() => handleTabChange(ChatHeaderToDisplay.none)}
						/>
						<label className={UIStyles.customCheckBoxWrapper} htmlFor="checkboxForX">
							<div
								className={`${UIStyles.customCheckBox} ${toDisplay === ChatHeaderToDisplay.none ? UIStyles.last : ''}`}
							>
								<div className={UIStyles.inner}>X</div>
							</div>
						</label>
					</div>
				</div>
			</div>

			<div className={style.listContainer}>
				<div className={style.listPositionContainer}>
					{toDisplay && toDisplay !== ChatHeaderToDisplay.none && (
						<div className={style.list} ref={userListRef}>
							{(toDisplay === ChatHeaderToDisplay.users || toDisplay === ChatHeaderToDisplay.allUsers) && (
								<div className={style.userList}>
									<UserList handleUsernameClick={handleUsernameClick} />
								</div>
							)}

							{toDisplay === ChatHeaderToDisplay.rooms && <RoomsList onRoomClick={(room) => setRoomName(room)} />}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
