import React, { ChangeEvent } from 'react';
import { Theme } from '@mui/material/styles';
import TextField, { TextFieldVariants } from '@mui/material/TextField';
import { SxProps } from '@mui/system';
import commonInputStyles from './InputStyle';

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type: React.HTMLInputTypeAttribute;
	variant?: TextFieldVariants;
}

const inputStyle: Record<TextFieldVariants, SxProps<Theme>> = {
	filled: {
		...commonInputStyles,
	},
	outlined: {
		...commonInputStyles,
	},
	standard: {},
};

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text', variant = 'standard' }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<TextField
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			variant={variant}
			sx={inputStyle[variant]}
			type={type}
		/>
	);
};
