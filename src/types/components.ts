import { array } from 'yup';

export interface ButtonProps {
	children: React.ReactNode | string;
	color?: string;
	textColor?: string;
	type: 'contained' | 'filled' | 'outlined';
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
}

export interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: string;
	variant?: 'standard' | 'outlined' | 'filled';
}

export interface DropdownProps {
	children?: React.ReactNode | string;
	value?: string;
	onOpen?: (value: string) => void;
	onClose?: (value: string) => void;
	placeholder?: string;
	variant?: 'standard' | 'outlined' | 'filled';
	defValue?: string;
	listName: string;
}
