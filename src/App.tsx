import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Auth, UserService } from 'services';
import Header from 'shared/modules/Header/Header';
import ThemeProvider from 'shared/theme/ThemeProvider';
import 'i18n';
import './services/firebase.services';
import { HomePage } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import Sidebar from './shared/modules/Sidebar/Sidebar';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { clearUser, selectUser, setUser } from './store/User';
import './App.scss';

const App = () => {
	const userData = useAppSelector(selectUser);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchUserProfile = async () => {
			Auth.restoreSession(async (userData) => {
				if (userData) {
					const { token, uid } = userData;
					localStorage.setItem('authToken', token);
					UserService.listenUserProfile(uid, (data) => {
						if (data) {
							dispatch(setUser(data));
						} else {
							console.log('No user data found');
						}
					});
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
							<Route path="/profile" element={userData.id !== '' ? <Profile /> : <Navigate to="/" />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
