import { createTheme, ThemeOptions } from '@mui/material/styles';
import { darkThemePalette, lightThemePalette } from './themePalette';

export const theme = (mode: 'light' | 'dark') => {
	const palette = mode === 'light' ? lightThemePalette : darkThemePalette;

	return createTheme({
		palette,
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {},
				},
			},
		},
	} as ThemeOptions);
};
