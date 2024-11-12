import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from 'shared/modules/Header/Header';
import ThemeProvider, { useTheme } from 'shared/theme/ThemeProvider';
import 'i18n';
import './services/firebase.services';
import Sidebar from './shared/modules/Sidebar/Sidebar';
import './App.scss';

const HomePage: React.FC = () => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div>
			<h1>
				Home Page, current theme: {currentTheme} {currentTheme === 'light' ? 'асуждаю' : ''}
			</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

const App = () => {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<div className="App">
					<Header />
					<main>
						<Sidebar />
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
