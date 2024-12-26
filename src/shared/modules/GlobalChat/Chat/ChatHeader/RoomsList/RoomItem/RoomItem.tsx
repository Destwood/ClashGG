import React, { useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectChatRooms } from 'store/ChatRoom';
import { selectUser } from 'store/User';
import style from './RoomItem.module.scss';

interface RoomItemProps {
	roomObj: any;
	onRoomClick: (name: string) => void;
}

export const RoomItem: React.FC<RoomItemProps> = ({ roomObj, onRoomClick }) => {
	const roomsList = useAppSelector(selectChatRooms).roomList;
	const roomName: string = roomObj.name;
	const activeRoom = useAppSelector(selectActiveRoom);
	const dispatch = useAppDispatch();
	const [isAddingUser, setIsAddingUser] = useState(false);
	const [newUserId, setNewUserId] = useState('');
	const userData = useAppSelector(selectUser);

	const handleJoinRoom = () => {
		if (roomName !== activeRoom) {
			dispatch(setActiveRoom(roomName));
			onRoomClick(roomName);
			ChatServices.joinRoom(roomName, userData);
		}
	};
	const handleAddUser = () => {
		setNewUserId('');
		setIsAddingUser(false);
		ChatServices.addUserToRoom(roomName, newUserId);
	};

	const handleLeaveRoom = () => {
		ChatServices.leaveRoom(activeRoom, userData);
	};

	const handleDeleteRoom = () => {
		ChatServices.deleteRoom(activeRoom);
		dispatch(setActiveRoom('global'));
	};

	return (
		<div className={style.roomItem} onClick={() => handleJoinRoom()}>
			<span className={`${style.nameOfRoom} ${roomName === activeRoom ? style.currentRoom : ''}`}>{roomName}</span>
			{roomName !== 'global' && roomName === activeRoom && (
				<div className={style.actions}>
					<button
						onClick={(e) => {
							handleLeaveRoom();
						}}
					>
						x
					</button>
					{roomObj.creator.id === userData.id && (
						<>
							{isAddingUser ? (
								<div className={style.addUserForm}>
									<input
										type="text"
										placeholder="Enter userId"
										value={newUserId}
										onChange={(e) => setNewUserId(e.target.value)}
									/>
									<button onClick={handleAddUser}>Add</button>
									<button onClick={() => setIsAddingUser(false)}>Cancel</button>
								</div>
							) : (
								<button
									onClick={(e) => {
										e.stopPropagation();
										setIsAddingUser(true);
									}}
								>
									+
								</button>
							)}
							<button
								onClick={(e) => {
									handleDeleteRoom();
								}}
							>
								del
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};
