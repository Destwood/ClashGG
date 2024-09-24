import { Themes } from '../../utils/enums';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export const getTheme = (mode: Themes) => {
	// TODO
	return mode === 'light' ? lightTheme : darkTheme;
};
