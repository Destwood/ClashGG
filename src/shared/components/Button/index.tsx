import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps } from 'types';
import buttonStyle from './ButtonStyle';

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
	return (
		<MuiButton sx={buttonStyle[type]} variant={type === 'outlined' ? 'outlined' : 'contained'} onClick={onClick}>
			{children}
		</MuiButton>
	);
};

// export default Index;
