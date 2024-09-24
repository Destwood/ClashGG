import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getTheme } from 'shared/theme/themes';
import { Themes } from 'utils/enums';
import { useAppSelector } from './shared/hooks';
import Header from './shared/modules/Header/Header';
import './App.scss';

const App = () => {
	const [themeMode, setThemeMode] = useState<Themes>(Themes.dark);
	const theme = createTheme(getTheme(themeMode));

	const modalState = useAppSelector((state) => state.modal);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className="App">
					<Header />

					<Routes>
						<Route path="/" element="" />
					</Routes>

					{/* Modals */}
					{/*{modalState.isOpen && <AuthModal />}*/}
					{/*<AuthModal />*/}
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
