import React, { useState } from 'react';
import { ChatServices } from 'services/chat.services';
import { Button } from 'shared/components';
import { useAppSelector } from 'shared/hooks';
import { selectChatRooms } from 'store/ChatRoom';
import { selectUser } from 'store/User';
import { IRoom } from 'types';
import { RoomType } from '../../../../../../utils/enums/chat';
import { RoomItem } from './RoomItem/RoomItem';
import style from './RoomsList.module.scss';

export const RoomsList: React.FC<{ onRoomClick: (name: string) => void }> = ({ onRoomClick }) => {
	const chatRoomsList = useAppSelector(selectChatRooms);
	const [creatingRoom, setCreatingRoom] = useState(false);
	const [newRoomName, setNewRoomName] = useState('');
	const userData = useAppSelector(selectUser);

	const handleCreateRoom = () => {
		if (newRoomName.trim()) {
			ChatServices.createNewRoom(newRoomName, userData);
			setNewRoomName('');
			setCreatingRoom(false);
		}
	};

	const filteredList = chatRoomsList.roomList
		.filter((room: any) =>
			room.users.some((userInRoom: any) => userInRoom.user.id === userData.id || room.name === 'global')
		)
		.map((room: any, index: number) => {
			return room;
		});

	return (
		<div className={style.roomsList}>
			<h3>Rooms</h3>

			{filteredList?.map((room: IRoom, index: number) =>
				room.type !== RoomType.direct ? <RoomItem key={index} roomObj={room} onRoomClick={onRoomClick} /> : null
			)}
			{!creatingRoom ? (
				<Button onClick={() => setCreatingRoom(true)} type="contained">
					Create New Room
				</Button>
			) : (
				<div className={style.createRoomForm}>
					<input
						type="text"
						value={newRoomName}
						onChange={(e) => setNewRoomName(e.target.value)}
						placeholder="Enter room name"
					/>
					<Button onClick={handleCreateRoom} type="contained">
						Create
					</Button>
				</div>
			)}
		</div>
	);
};
