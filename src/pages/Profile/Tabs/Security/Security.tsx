import React from 'react';
import { useTranslation } from 'react-i18next';
import { getAuth } from 'firebase/auth';
import { doc } from 'firebase/firestore';
import { firestore, UserService } from 'services';
import { useAppSelector } from 'shared/hooks/store';
import { selectUser } from 'store/User';
import { User } from 'utils/constants';
import styles from './index.module.scss';

export const Security: React.FC = () => {
	const { t } = useTranslation();
	const userData = useAppSelector(selectUser);
	const auth = getAuth();
	const user = auth.currentUser;
	const userRef = doc(firestore, User.firebaseKey, userData.id);

	const handleDeleteAccount = async () => {
		await UserService.deleteProfile(user, userRef);
	};

	return (
		<div className={styles.security}>
			<h3>{t('profile.securitySettings')}</h3>
			<div className={styles.securityOptions}>
				<div className={styles.option}>
					<label>{t('profile.changePassword')}</label>
					<input type="password" placeholder={t('profile.newPassword')} />
				</div>
				<div className={styles.option}>
					<label>{t('profile.twoFactorAuth')}</label>
					<input type="checkbox" />
				</div>
			</div>
			<div className={styles.deleteAccount}>
				<button className={styles.deleteButton} onClick={handleDeleteAccount}>
					{t('profile.deleteAccount')}
				</button>
			</div>
		</div>
	);
};
