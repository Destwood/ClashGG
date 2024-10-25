import React from 'react';

export interface ButtonProps {
	children: React.ReactNode | string;
	color?: string;
	textColor?: string;
	type: 'contained' | 'filled' | 'outlined';
	onClick?: () => void;
}

export interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
	variant?: 'standard' | 'outlined' | 'filled';
}
