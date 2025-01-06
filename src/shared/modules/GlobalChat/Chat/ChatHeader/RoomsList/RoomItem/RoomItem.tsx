import React, { useState } from 'react';
import add from 'assets/add.svg';
import del from 'assets/delete.svg';
import leave from 'assets/leave.svg';
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
	const roomName: string = roomObj.name;
	const activeRoom = useAppSelector(selectActiveRoom);
	const dispatch = useAppDispatch();
	const [isAddingUser, setIsAddingUser] = useState(false);
	const [newUserId, setNewUserId] = useState('');
	const userData = useAppSelector(selectUser);
	const chatRoomsList = useAppSelector(selectChatRooms).roomList;

	const handleJoinRoom = () => {
		if (roomName !== activeRoom) {
			dispatch(setActiveRoom(roomObj.id));
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
			<span className={`${style.nameOfRoom} ${roomObj.id === activeRoom ? style.currentRoom : ''}`}>{roomName}</span>

			{roomName !== 'global' && roomObj.id === activeRoom && (
				<div className={style.actions}>
					<button
						className={style.controlButton}
						onClick={(e) => {
							e.stopPropagation();
							handleLeaveRoom();
						}}
					>
						<img className={style.icon} src={leave} alt="" />
					</button>
					{roomObj.creator?.id === userData.id && (
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
									className={style.controlButton}
									onClick={(e) => {
										e.stopPropagation();
										setIsAddingUser(true);
									}}
								>
									<img className={style.icon} src={add} alt="" />
								</button>
							)}
							<button
								className={style.controlButton}
								onClick={(e) => {
									e.stopPropagation();
									handleDeleteRoom();
								}}
							>
								<img className={style.icon} src={del} alt="" />
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);
};
