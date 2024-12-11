import React, { useEffect, useState } from 'react';
import chatIcon from 'assets/chatIcon.svg';
import closeIcon from 'assets/close.svg';
import { getAuth } from 'firebase/auth';
import { Button, Input } from 'shared/components';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/User';
import { IMessage } from 'types/chat';
import style from './GlobalChat.module.scss';

const GlobalChat: React.FC = () => {
	const auth = getAuth();
	const userData = useAppSelector(selectUser);
	const [socket, setSocket] = useState<WebSocket | null>(null);
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [inputMessage, setInputMessage] = useState<string>('');
	const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
	const [currentRoom, setCurrentRoom] = useState<string>('room1');

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:5000');

		ws.onopen = () => {
			console.log('Connected to WebSocket server');
			// Підключаємо користувача до кімнати
			ws.send(JSON.stringify({ event: 'joinRoom', room: currentRoom }));
		};

		ws.onmessage = (event) => {
			const message = JSON.parse(event.data);
			console.log(message);

			if (message.event === 'history') {
				setMessages(message.data);
			} else {
				setMessages((prev) => [...prev, message]);
			}
		};

		ws.onclose = () => {
			console.log('Disconnected from WebSocket server');
		};

		ws.onerror = (error) => {
			console.error('WebSocket error:', error);
		};

		setSocket(ws);

		return () => {
			ws.close();
		};
	}, [currentRoom]);

	const sendMessage = () => {
		if (socket && inputMessage.trim()) {
			const message: IMessage = {
				event: 'message',
				id: Date.now(),
				username: `${userData.username}`,
				message: inputMessage,
				date: new Date().toISOString(),
			};
			socket.send(JSON.stringify(message));
			setInputMessage('');
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			sendMessage();
		}
	};

	return (
		<div className={style.globalChat}>
			{userData.id && (
				<>
					{isChatOpen && (
						<div className={style.chatContainer}>
							<div className={style.chatHeader}>
								<h1>Global Chat</h1>
								<div className={style.roomContainer}>
									<div className={style.roomButtomContainer}>
										<Button onClick={() => setCurrentRoom('room1')} type="contained">
											&lt;
										</Button>
									</div>

									<p>{currentRoom}</p>
									<div className={style.roomButtomContainer}>
										<Button onClick={() => setCurrentRoom('room2')} type="contained">
											&gt;
										</Button>
									</div>
								</div>
							</div>

							<div className={style.msgList}>
								{messages.map((msg) => (
									<div className={style.message} key={msg.id}>
										<span className={`${style.username} ${msg.username === userData.username ? style.me : ''}`}>
											{msg.username}
										</span>
										: {msg.message}
									</div>
								))}
							</div>
							<div className={style.inputArea}>
								<div className={style.inputContainer} onKeyDown={handleKeyDown}>
									<Input
										type="text"
										value={inputMessage}
										onChange={(value) => setInputMessage(value)}
										placeholder="Type your message..."
									/>
								</div>

								<div className={style.sendContainer}>
									<Button onClick={sendMessage} type="contained">
										Send
									</Button>
								</div>
							</div>
						</div>
					)}
					<div
						className={style.chatButton}
						onClick={() => {
							setIsChatOpen(!isChatOpen);
						}}
					>
						{isChatOpen ? (
							<img className={style.chatIcon} src={closeIcon} alt="" />
						) : (
							<img className={style.chatIcon} src={chatIcon} alt="" />
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default GlobalChat;
