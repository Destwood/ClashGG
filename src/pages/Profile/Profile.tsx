import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { UserService } from "services";
import { LanguageButton, Switch } from 'shared/components';
import { useAppSelector } from 'shared/hooks';
import { useTheme } from 'shared/theme/ThemeProvider';
import { selectUser } from 'store/User';
import { profileTabs } from 'utils/enums';
import { AppSettings } from './Tabs/AppSettings/AppSettings';
import { Security } from './Tabs/Security/Security';
import { UserSettings } from './Tabs/UserSettings/UserSettings';
import style from './index.module.scss';

export const Profile: React.FC = () => {
	const { t } = useTranslation();
	const userData = useAppSelector(selectUser);
	const { toggleTheme } = useTheme();
	const auth = getAuth();
	const [activeTab, setActiveTab] = useState<profileTabs>(profileTabs.USERSETTINGS);

	const handleTabChange = (tab: profileTabs) => {
		setActiveTab(tab);
	};

	const handleThemeToggle = () => {
		toggleTheme();
	};

	const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const selectedFile = event.target.files[0];
			const fileReader = new FileReader();

			fileReader.onloadend = async () => {
				const profilePicAsString = fileReader.result as string;
				try {
					await UserService.updateProfile(auth, { profilePicture: profilePicAsString });
				} catch (error) {
					console.error("Error updating profile picture:", error);
				}
			};

			fileReader.readAsDataURL(selectedFile);
		}
	};


	return (
		<div className={style.profilePage}>
			<aside className={style.sidebar}>
				<div className={style.profileInfo}>

					<label htmlFor="profileImage" className={style.avatarLabel}>
						<img className={style.avatar}
							 src={userData.profilePicture} alt={t('profile.avatarAlt')} />
					</label>
					<input
						type="file"
						id="profileImage"
						accept="image/*"
						style={{ display: 'none' }}
						onChange={handleImageChange}
					/>

					{/*<img*/}
					{/*	src={avatarSrc}*/}
					{/*	alt={t('profile.avatarAlt')}*/}
					{/*	className={style.avatar}*/}
					{/*	onError={() => {*/}
					{/*		setAvatarSrc(defaultPicture);*/}
					{/*	}}*/}
					{/*/>*/}
					<h2 className={style.username}>{userData.username}</h2>
					<Link to="/" className={style.viewProfile}>
						{t('profile.viewProfile')}
					</Link>
				</div>
				<div className={style.balance}>
					<div className={style.balanceAmount}>€0.00</div>
					<div className={style.balanceButtons}>
						<button>{t('profile.addFunds')}</button>
						<button>{t('profile.withdraw')}</button>
					</div>
				</div>
				<div className={style.appearance}>
					<div>
						<span>{t('profile.theme')}</span>
						<Switch
							onChange={() => {
								handleThemeToggle();
							}}
						/>
					</div>
					<LanguageButton />
				</div>
				<nav className={style.menu}>
					<div
						className={`${style.menuItem} ${activeTab === profileTabs.USERSETTINGS ? style.active : ''}`}
						onClick={() => handleTabChange(profileTabs.USERSETTINGS)}
					>
						Profile
					</div>
					{/*<div*/}
					{/*	className={`${style.menuItem} ${activeTab === profileTabs.APPSETTINGS ? style.active : ''}`}*/}
					{/*	onClick={() => handleTabChange(profileTabs.APPSETTINGS)}*/}
					{/*>*/}
					{/*	{t('profile.settings')}*/}
					{/*</div>*/}
					{/*<div*/}
					{/*	className={`${style.menuItem} ${activeTab === profileTabs.SECURITY ? style.active : ''}`}*/}
					{/*	onClick={() => handleTabChange(profileTabs.SECURITY)}*/}
					{/*>*/}
					{/*	{t('profile.security')}*/}
					{/*</div>*/}
				</nav>
			</aside>
			<main className={style.content}>
				<Suspense fallback={<div>{t('profile.loading')}</div>}>
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
