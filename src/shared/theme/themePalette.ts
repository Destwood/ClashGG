import { getCssVariable } from 'utils';
import './variables.scss';

// TODO - how to add custom colors here without .d.ts file

export const lightThemePalette = {
	mode: 'light',
	primary: {
		main: getCssVariable('--primary-main'),
		light: getCssVariable('--primary-light'),
		dark: getCssVariable('--primary-dark'),
		contrastText: getCssVariable('--text-primary'),
	},
	secondary: {
		main: getCssVariable('--secondary-main'),
		light: getCssVariable('--secondary-light'),
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
	notColors: {
		red: getCssVariable('--not-red'),
		green: getCssVariable('--not-green'),
	},
	grey: {
		100: getCssVariable('--grey-100'),
		300: getCssVariable('--grey-300'),
		500: getCssVariable('--grey-500'),
		700: getCssVariable('--grey-700'),
		900: getCssVariable('--grey-900'),
	},
	link: {
		primary: getCssVariable('--cm-link-primary-color'),
		hover: getCssVariable('--cm-link-primary-hover-color'),
	},
};

export const darkThemePalette = {
	mode: 'dark',
	primary: {
		main: getCssVariable('--primary-dark'),
		contrastText: getCssVariable('--text-primary'),
	},
	secondary: {
		main: getCssVariable('--secondary-main'),
		contrastText: getCssVariable('--primary-dark'),
		dark: getCssVariable('--cm-colors-bg0'),
	},
	background: {
		default: getCssVariable('--cm-colors-bg1'),
		paper: getCssVariable('--background-default'),
	},
	text: {
		primary: getCssVariable('--text-primary'),
		secondary: getCssVariable('--text-secondary'),
	},
	// cm colors
	info: {
		light: getCssVariable('--cm-colors-bg4'),
		main: getCssVariable('--cm-colors-bg3'),
		dark: getCssVariable('--text-primary'),
		contrastText: getCssVariable('--text-primary'),
	},
	grey: {
		100: getCssVariable('--grey-100'),
		300: getCssVariable('--grey-300'),
		500: getCssVariable('--grey-500'),
		700: getCssVariable('--grey-700'),
		900: getCssVariable('--grey-900'),
	},
	link: {
		primary: getCssVariable('--cm-link-primary-color'),
		hover: getCssVariable('--cm-link-primary-hover-color'),
	},
	divider: getCssVariable('--transparent'),
};
