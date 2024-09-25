import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from 'shared/modules/Header/Header';
import { getTheme } from 'shared/theme/themes';
import { Themes } from 'utils/enums';
import 'i18n';
import './App.scss';

const App = () => {
	const [themeMode, setThemeMode] = useState<Themes>(Themes.dark);
	const theme = createTheme(getTheme(themeMode));

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element="" />
					</Routes>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
