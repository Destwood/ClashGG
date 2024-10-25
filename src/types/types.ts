import React from 'react';

export interface ButtonProps {
	children: React.ReactNode | string;
	color?: string;
	textColor?: string;
	type: 'contained' | 'filled' | 'outlined';
	onClick?: () => void;
}
