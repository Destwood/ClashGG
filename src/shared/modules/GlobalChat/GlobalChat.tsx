import React, { useState } from 'react';
import chatIcon from 'assets/chatIcon.svg';
import closeIcon from 'assets/close.svg';
import { useAppSelector } from 'shared/hooks/store';
import { selectUser } from 'store/User';
import { Chat } from './Chat/Chat';
import style from './GlobalChat.module.scss';

const GlobalChat: React.FC = () => {
	const userData = useAppSelector(selectUser);
	const [isChatOpen, setIsChatOpen] = useState<boolean>(true);

	return (
		<div className={style.globalChat}>
			{userData.id && (
				<>
					{isChatOpen && <Chat />}
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
