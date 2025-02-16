import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { ChatServices } from 'services/chat.services';
import { Button, Input } from 'shared/components';
import { Dropdown } from 'shared/components/Dropdown';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectUser } from 'store/User';
import { IRoom } from 'types';
import { RoomItem } from './RoomItem/RoomItem';
import style from './RoomsList.module.scss';

interface roomsListData {
	roomsListData: IRoom[];
	listName: string;
	handleRoomClick: (roomName: string) => void;
}

export const RoomsList: React.FC<roomsListData> = ({ roomsListData, listName, handleRoomClick }) => {
	const dispatch = useAppDispatch();
	const [creatingRoom, setCreatingRoom] = useState(false);
	const [newRoomName, setNewRoomName] = useState('');
	const userData = useAppSelector(selectUser);
	const currentActiveRoom = useAppSelector(selectActiveRoom);

	const handleCreateRoom = () => {
		if (newRoomName.trim()) {
			ChatServices.createNewRoom(newRoomName, userData);
			setNewRoomName('');
			setCreatingRoom(false);
		}
	};

	const handleCloseCreateRoom = () => {
		setCreatingRoom(false);
	};

	const handleJoinRoom = (room: IRoom) => {
		if (room.id && currentActiveRoom !== room.id) {
			dispatch(setActiveRoom(room.id));
			handleRoomClick(room.name);
			ChatServices.joinRoom(room.id, userData);
		}
	};

	return (
		<div className={style.roomsList}>
			{roomsListData && roomsListData.length && (
				<Dropdown listName={listName}>
					{roomsListData
						.filter((item: IRoom) => item.id === 'global' || (item.id && item.id.length === 36))
						.map((item: IRoom) => (
							<MenuItem key={item.id} onClick={() => handleJoinRoom(item)}>
								<RoomItem roomObj={item} />
							</MenuItem>
						))}

					<MenuItem
						disableRipple
						disableTouchRipple
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
						sx={{
							'&.MuiMenuItem-root:hover': {
								cursor: 'default',
								backgroundColor: 'transparent',
							},
						}}
					>
						{!creatingRoom ? (
							<Button
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									setCreatingRoom(true);
								}}
								type="contained"
							>
								Create New Room
							</Button>
						) : (
							<div
								className={style.createRoomForm}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
								}}
							>
								<Input
									type="text"
									value={newRoomName}
									onChange={(value) => setNewRoomName(value)}
									placeholder="Type your message..."
								/>
								<div className={style.createROomButtons}>
									<div className={style.createRoomButton}>
										<Button onClick={handleCreateRoom} type="contained">
											Create
										</Button>
									</div>
									<div className={style.closeCreateRoomButton}>
										<Button onClick={handleCloseCreateRoom} type="contained">
											Close
										</Button>
									</div>
								</div>
							</div>
						)}
					</MenuItem>
				</Dropdown>
			)}
		</div>
	);
};
