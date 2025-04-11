import { Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
import { ButtonProps } from 'types';

const commonDropdownStyles: CSSObject = {
	transition: '0.1s',
	height: '100%',
	width: '100%',
};

export const dropdownStyle = (theme: Theme): Partial<Record<ButtonProps['type'], CSSObject>> => ({
	contained: {
		...commonDropdownStyles,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
			opacity: 0.9,
		},
	},
	outlined: {
		...commonDropdownStyles,
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
		},
	},
});
