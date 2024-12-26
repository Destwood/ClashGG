import React, { useEffect, useState } from 'react';
import { current } from '@reduxjs/toolkit';
import { ChatServices } from 'services/chat.services';
import { useAppDispatch, useAppSelector } from 'shared/hooks/store';
import { selectActiveRoom, setActiveRoom } from 'store/ChatActiveRoom';
import { selectChatRooms, setRoomList } from 'store/ChatRoom';
import { setUserList } from 'store/ChatUser';
import { selectUser } from 'store/User';
import { IMessage } from 'types/chat';
import { ChatEvents } from 'utils/enums/chat';
import { ChatHeader } from './ChatHeader/ChatHeader';
import { InputArea } from './InputArea/InputArea';
import style from './Chat.module.scss';

export const Chat: React.FC = () => {
	const activeRoom = useAppSelector(selectActiveRoom);
	const dispatch = useAppDispatch();
	const userData = useAppSelector(selectUser);
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [inputMessage, setInputMessage] = useState<string>('');

	useEffect(() => {
		ChatServices.connect(
			'ws://localhost:5000',
			userData,
			activeRoom,
			(message) => {
				console.log(message);

				switch (message.event) {
					case ChatEvents.history:
						setMessages(message.messages);
						break;
					case ChatEvents.updateRoomList:
						// readable option
						const rooms = message.rooms;
						const activeRoomList = rooms.find((room: any) => room.name === activeRoom);
						dispatch(setUserList(activeRoomList.users));
						// short option
						// dispatch(setUserList(message.rooms.find((room: any) => room.name === activeRoom)?.users || []));

						dispatch(setRoomList(message.rooms));
						break;
					case ChatEvents.message:
						setMessages((prev) => [...prev, message]);
						break;
					case ChatEvents.createPrivateMessageRoom:
						// dispatch(setActiveRoom(roomName));
						// setMessages((prev) => [...prev, message]);

						break;
					default:
						break;
				}
			},
			() => {
				console.log('WebSocket closed');
			},
			(error) => {
				console.log(error);
			}
		);

		return () => {
			ChatServices.close();
		};
	}, []);

	const sendMessage = () => {
		const message: IMessage = {
			event: ChatEvents.message,
			id: Date.now(),
			user: userData,
			message: inputMessage,
			date: new Date().toISOString(),
			room: activeRoom,
		};
		console.log('sending: ', message);
		ChatServices.sendMessage(message);
		setInputMessage('');
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputMessage !== '') {
			sendMessage();
		}
	};

	return (
		<div className={style.chatContainer}>
			<ChatHeader />

			<div className={style.msgList}>
				{messages.map((msg) => (
					<div className={style.message} key={msg.id}>
						<span className={`${style.username} ${msg.user.username === userData.username ? style.me : ''}`}>
							{msg.user.username}
						</span>
						: {msg.message}
					</div>
				))}
			</div>
			<InputArea
				inputMessage={inputMessage}
				setInputMessage={setInputMessage}
				handleKeyDown={handleKeyDown}
				onSubmit={sendMessage}
			/>
		</div>
	);
};
