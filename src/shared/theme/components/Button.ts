import { Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
import { ButtonProps } from 'types';

const commonButtonStyles: CSSObject = {
	borderRadius: '1rem',
	transition: '0.1s',
	height: '100%',
	width: '100%',
	'& img': {
		height: '2rem',
	},
};

export const buttonStyle = (theme: Theme): Partial<Record<ButtonProps['type'], CSSObject>> => ({
	contained: {
		...commonButtonStyles,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
			opacity: 0.9,
		},
	},
	outlined: {
		...commonButtonStyles,
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.primary.main,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
		},
	},
});
