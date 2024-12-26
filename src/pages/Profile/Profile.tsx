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
import styles from './index.module.scss';

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
		<div className={styles.profilePage}>
			<aside className={styles.sidebar}>
				<div className={styles.profileInfo}>
					<img
						src={avatarSrc}
						alt="Avatar"
						className={styles.avatar}
						onError={() => {
							setAvatarSrc(defaultPicture);
						}}
					/>
					<h2 className={styles.username}>{userData.username}</h2>
					<Link to="/" className={styles.viewProfile}>
						View Profile
					</Link>
				</div>
				<div className={styles.balance}>
					<div className={styles.balanceAmount}>€0.00</div>
					<div className={styles.balanceButtons}>
						<button>Add funds</button>
						<button>Withdraw</button>
					</div>
				</div>
				<div className={styles.appearance}>
					<span>Theme</span>
					<Switch
						onChange={() => {
							handleThemeToggle();
						}}
					/>
				</div>
				<nav className={styles.menu}>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.USERSETTINGS ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.USERSETTINGS)}
					>
						Profile
					</div>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.APPSETTINGS ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.APPSETTINGS)}
					>
						Settings
					</div>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.SECURITY ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.SECURITY)}
					>
						Security
					</div>
				</nav>
			</aside>
			<main className={styles.content}>
				<Suspense fallback={<div>Loading...</div>}>
					<div className={styles.tabContent}>
						{activeTab === profileTabs.USERSETTINGS && <UserSettings />}
						{activeTab === profileTabs.APPSETTINGS && <AppSettings />}
						{activeTab === profileTabs.SECURITY && <Security />}
					</div>
				</Suspense>
			</main>
		</div>
	);
};
