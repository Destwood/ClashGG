import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useTheme } from 'shared/theme';

export const HomePage: React.FC = () => {
	const auth = getAuth();
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div>
			<h1>
				Home Page, current theme: {currentTheme} {currentTheme === 'light' ? 'асуждаю' : ''}
			</h1>
			<p>{auth.currentUser?.uid !== undefined ? 'true' : 'false'}</p>
			<p>
				<Link to="/profile">profile</Link>
			</p>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
