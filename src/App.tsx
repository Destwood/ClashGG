import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Game } from 'pages/Game/Game';
import { HomePage } from 'pages/Home/Home';
import { Profile } from 'pages/Profile/Profile';
import { Auth, UserService } from 'services';
import GlobalChat from 'shared/modules/GlobalChat/GlobalChat';
import Header from 'shared/modules/Header/Header';
import Sidebar from 'shared/modules/Sidebar/Sidebar';
import ThemeProvider from 'shared/theme/ThemeProvider';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { clearUser, selectUser, setUser } from 'store/User';
import { tokenKey } from 'utils/constants';
import 'i18n';
import 'services/firebase.services';
import './App.scss';

const App = () => {
	const userData = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchUserProfile = async () => {
			Auth.restoreSession(async (userData) => {
				if (userData) {
					const { token, uid } = userData;
					localStorage.setItem(tokenKey, token);
					UserService.listenUserProfile(uid, (data) => {
						if (data) {
							dispatch(setUser(data));
						} else {
							console.log('No user data found');
						}
					});
				} else {
					localStorage.removeItem(tokenKey);
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
						<GlobalChat />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/game" element={<Game />} />
							<Route path="/profile" element={userData.id ? <Profile /> : <Navigate to="/" />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
