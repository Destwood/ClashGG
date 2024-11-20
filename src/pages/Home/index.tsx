import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../shared/theme';

export const HomePage: React.FC = () => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div>
			<h1>
				Home Page, current theme: {currentTheme} {currentTheme === 'light' ? 'асуждаю' : ''}
			</h1>
			<p>
				<Link to="/profile">profile</Link>
			</p>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
