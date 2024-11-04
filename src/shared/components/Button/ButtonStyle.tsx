import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { ButtonProps } from 'types';

const commonButtonStyles: SxProps<Theme> = {
	borderRadius: '1rem',
	fontSize: '0.75rem',
	textTransform: 'uppercase',
	border: 'none',
	transition: '0.1s',
	margin: '0',
	height: '100%',
	width: '100%',

	img: {
		height: '2rem',
	},

	// not working
	'&:hover': {
		opacity: 0.9,
	},
};

const buttonStyles: Record<ButtonProps['type'], SxProps<Theme>> = {
	contained: {
		...commonButtonStyles,
		backgroundColor: '#2f384c',

		'&:hover': {
			backgroundColor: '#4a556d',
		},
	},

	filled: {
		...commonButtonStyles,
		backgroundColor: '#fff',
		color: '#000',

		'&:hover': {
			color: '#fff',
			backgroundColor: 'transparent',
		},
	},

	outlined: {
		...commonButtonStyles,
	},
};

export default buttonStyles;
