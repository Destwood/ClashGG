import React from 'react';
import { Button, Input } from 'shared/components';
import style from './InputArea.module.scss';

interface InputAreaProps {
	inputMessage: string;
	setInputMessage: React.Dispatch<React.SetStateAction<string>>;
	handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
}

export const InputArea: React.FC<InputAreaProps> = ({ inputMessage, setInputMessage, handleKeyDown, onSubmit }) => {
	return (
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
				<Button onClick={onSubmit} type="contained">
					Send
				</Button>
			</div>
		</div>
	);
};
