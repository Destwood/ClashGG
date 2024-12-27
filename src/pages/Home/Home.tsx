import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useTheme } from 'shared/theme';
import style from './index.module.scss';

export const HomePage: React.FC = () => {
	//TODO - all styles and this page is temporary
	const auth = getAuth();
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<div>
			<h1>
				Home Page, current theme: {currentTheme} {currentTheme === 'light' ? 'асуждаю' : ''}
			</h1>
			<p>{auth.currentUser?.uid !== undefined ? 'true' : 'false'}</p>
			<p>
				<Link className={style.link} to="/profile">
					profile
				</Link>
				<Link className={style.link} to="/player">
					Player Data
				</Link>
			</p>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};
