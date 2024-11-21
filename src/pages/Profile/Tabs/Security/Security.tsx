import React from 'react';
import { deleteUser, getAuth } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { firestore } from 'services';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/User';
import styles from './index.module.scss';

export const Security: React.FC = () => {
	const userData = useAppSelector(selectUser);
	const auth = getAuth();
	const user = auth.currentUser;
	const userRef = doc(firestore, 'users', userData.id);

	const handleDeleteAccount = async () => {
		if (user) {
			try {
				await deleteDoc(userRef);
				deleteUser(user)
					.then(() => {
						console.log('Account deleted');
					})
					.catch((e) => {
						console.error('Error deleting account', e);
					});
			} catch (e) {
				console.error('Error deleting account', e);
			}
		}
	};

	return (
		<div className={styles.security}>
			<h3>Security Settings</h3>
			<div className={styles.securityOptions}>
				<div className={styles.option}>
					<label>Change Password</label>
					<input type="password" placeholder="New password" />
				</div>
				<div className={styles.option}>
					<label>Two-Factor Authentication</label>
					<input type="checkbox" />
				</div>
			</div>
			<div className={styles.deleteAccount}>
				<button className={styles.deleteButton} onClick={handleDeleteAccount}>
					Delete Account
				</button>
			</div>
		</div>
	);
};
