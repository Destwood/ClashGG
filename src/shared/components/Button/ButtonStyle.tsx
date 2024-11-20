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
	contained: {},

	filled: {
		...commonButtonStyles,

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},

	outlined: {
		...commonButtonStyles,
	},
};

export default buttonStyles;
