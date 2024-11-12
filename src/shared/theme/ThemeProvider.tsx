import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Themes } from 'utils/enums';
import { theme } from './theme';

interface ThemeContextType {
	toggleTheme: () => void;
	currentTheme: Themes.light | Themes.dark;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState<Themes.light | Themes.dark>(Themes.dark);

	const toggleTheme = () => {
		setCurrentTheme((prev) => (prev === Themes.light ? Themes.dark : Themes.light));
	};

	const themeConfig = theme(currentTheme);

	const contextValue = useMemo(
		() => ({
			toggleTheme,
			currentTheme,
		}),
		[currentTheme]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			<MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export default ThemeProvider;
