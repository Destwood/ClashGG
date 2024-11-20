import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Auth, UserService } from 'services';
import Header from 'shared/modules/Header/Header';
import ThemeProvider from 'shared/theme/ThemeProvider';
import 'i18n';
import './services/firebase.services';
import { HomePage } from './pages/Home';
import { Profile } from './pages/Profile';
import Sidebar from './shared/modules/Sidebar/Sidebar';
import { useAppDispatch } from './store/hooks';
import { clearUser, setUser } from './store/User';
import './App.scss';

const App = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchUserProfile = async () => {
			Auth.restoreSession(async (userData) => {
				if (userData) {
					const { token, username, email, uid } = userData;
					localStorage.setItem('authToken', token);

					try {
						const profile = await UserService.getUserProfile(uid);
						console.log(profile);
					} catch (error) {
						console.error(`Failed to fetch user profile for UID ${uid}:`, error);
					}

					dispatch(setUser({ token, username, email }));
				} else {
					localStorage.removeItem('authToken');
					dispatch(clearUser());
				}
			});
		};

		fetchUserProfile();
	}, []);

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
							<Route path="/profile" element={<Profile />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
