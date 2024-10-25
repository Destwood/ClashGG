import { getCssVariable } from 'utils';

export const darkThemePalette = {
	primary: {
		main: getCssVariable('--primary-main'),
		light: getCssVariable('--primary-light'),
		dark: getCssVariable('--primary-dark'),
		contrastText: getCssVariable('--text-primary'),
	},
	secondary: {
		main: getCssVariable('--secondary-main'),
		light: getCssVariable('--secondary-light'),
		dark: getCssVariable('--secondary-dark'),
		contrastText: getCssVariable('--text-primary'),
	},
	background: {
		default: getCssVariable('--background-default'),
		paper: getCssVariable('--background-paper'),
	},
	text: {
		primary: getCssVariable('--text-primary'),
		secondary: getCssVariable('--text-secondary'),
	},
};
