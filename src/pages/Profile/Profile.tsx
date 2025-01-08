import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPicture from 'assets/profile.svg';
import { Switch } from 'shared/components';
import { useAppSelector } from 'shared/hooks/store';
import { useTheme } from 'shared/theme/ThemeProvider';
import { selectUser } from 'store/User';
import { profileTabs } from 'utils/enums';
import { AppSettings } from './Tabs/AppSettings/AppSettings';
import { Security } from './Tabs/Security/Security';
import { UserSettings } from './Tabs/UserSettings/UserSettings';
import style from './index.module.scss';

export const Profile: React.FC = () => {
	const userData = useAppSelector(selectUser);
	const { toggleTheme } = useTheme();

	const [avatarSrc, setAvatarSrc] = useState<string>('');
	const [activeTab, setActiveTab] = useState<profileTabs>(profileTabs.USERSETTINGS);

	const handleTabChange = (tab: profileTabs) => {
		setActiveTab(tab);
	};

	const handleThemeToggle = () => {
		toggleTheme();
	};

	return (
		<div className={style.profilePage}>
			<aside className={style.sidebar}>
				<div className={style.profileInfo}>
					<img
						src={avatarSrc}
						alt="Avatar"
						className={style.avatar}
						onError={() => {
							setAvatarSrc(defaultPicture);
						}}
					/>
					<h2 className={style.username}>{userData.username}</h2>
					<Link to="/" className={style.viewProfile}>
						View Profile
					</Link>
				</div>
				<div className={style.balance}>
					<div className={style.balanceAmount}>€0.00</div>
					<div className={style.balanceButtons}>
						<button>Add funds</button>
						<button>Withdraw</button>
					</div>
				</div>
				<div className={style.appearance}>
					<span>Theme</span>
					<Switch
						onChange={() => {
							handleThemeToggle();
						}}
					/>
				</div>
				<nav className={style.menu}>
					<div
						className={`${style.menuItem} ${activeTab === profileTabs.USERSETTINGS ? style.active : ''}`}
						onClick={() => handleTabChange(profileTabs.USERSETTINGS)}
					>
						Profile
					</div>
					<div
						className={`${style.menuItem} ${activeTab === profileTabs.APPSETTINGS ? style.active : ''}`}
						onClick={() => handleTabChange(profileTabs.APPSETTINGS)}
					>
						Settings
					</div>
					<div
						className={`${style.menuItem} ${activeTab === profileTabs.SECURITY ? style.active : ''}`}
						onClick={() => handleTabChange(profileTabs.SECURITY)}
					>
						Security
					</div>
				</nav>
			</aside>
			<main className={style.content}>
				<Suspense fallback={<div>Loading...</div>}>
					<div className={style.tabContent}>
						{activeTab === profileTabs.USERSETTINGS && <UserSettings />}
						{activeTab === profileTabs.APPSETTINGS && <AppSettings />}
						{activeTab === profileTabs.SECURITY && <Security />}
					</div>
				</Suspense>
			</main>
		</div>
	);
};
