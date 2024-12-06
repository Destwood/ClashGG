import { SxProps, Theme } from '@mui/system';

const commonInputStyles: SxProps<Theme> = {
	bgColor: '#2F384C',
	borderRadius: '.5rem',
	color: 'white',
	padding: '0',
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'& .MuiInputBase-input': {
		color: 'white',
		padding: '.5rem 1rem',
		fontSize: '.9rem',
		'&::placeholder': {
			color: '#fff',
		},
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #ffffff2a',
	},
	'&:focus-within .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #2F384C',
		outline: 'none',
	},
};

export const inputStyle: Record<string, SxProps<Theme>> = {
	filled: {
		...commonInputStyles,
	},
	outlined: {
		...commonInputStyles,
	},
	standard: {},
};
