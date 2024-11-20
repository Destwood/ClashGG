import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import defaultPicture from 'assets/profile.svg';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useTheme } from 'shared/theme/ThemeProvider';
import { profileTabs } from 'utils/enums';
import { AppSettings } from './Tabs/AppSettings';
import { Security } from './Tabs/Security';
import { UserSettings } from './Tabs/UserSettings';
import './style.css';
import styles from './index.module.scss';

export const Profile: React.FC = () => {
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
					<h2 className={styles.username}>Destwood</h2>
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
					<input
						type="checkbox"
						className="theme-checkbox"
						onClick={() => {
							handleThemeToggle();
						}}
					/>
				</div>
				<nav className={styles.menu}>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.SECURITY ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.SECURITY)}
					>
						Profile
					</div>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.USERSETTINGS ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.USERSETTINGS)}
					>
						Settings
					</div>
					<div
						className={`${styles.menuItem} ${activeTab === profileTabs.APPSETTINGS ? styles.active : ''}`}
						onClick={() => handleTabChange(profileTabs.APPSETTINGS)}
					>
						Security
					</div>
				</nav>
			</aside>
			<main className={styles.content}>
				<Suspense fallback={<div>Loading...</div>}>
					<div className={styles.tabContent}>
						{activeTab === profileTabs.SECURITY && <UserSettings />}
						{activeTab === profileTabs.USERSETTINGS && <AppSettings />}
						{activeTab === profileTabs.APPSETTINGS && <Security />}
					</div>
				</Suspense>
			</main>
		</div>
	);
};
