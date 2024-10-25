import { extendTheme } from '@mui/material';
import { buttonStyle, inputStyle } from './components';

const theme = extendTheme({
	components: {
		MuiInput: {
			styleOverrides: inputStyle,
		},
		MuiButton: {
			styleOverrides: buttonStyle,
		},
	},
});

export default theme;
