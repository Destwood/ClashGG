import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { inputStyle } from 'shared/theme/components';
import { InputProps } from 'types';

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
