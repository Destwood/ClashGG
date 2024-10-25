import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps } from 'types';
import buttonStyle from './ButtonStyle';

export const Button: React.FC<ButtonProps> = ({ children, color, textColor, type, onClick }) => {
	return (
		<MuiButton
			style={{ backgroundColor: color, color: textColor }}
			sx={buttonStyle[type]}
			variant={type === 'outlined' ? 'outlined' : 'contained'}
			onClick={onClick}
		>
			{children}
		</MuiButton>
	);
};
