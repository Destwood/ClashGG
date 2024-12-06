import { Auth, deleteUser, User } from 'firebase/auth';
import { deleteDoc, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { firestore } from 'services/firebase.services';
import { IUserSettings } from 'types';
import { firebaseKey } from 'utils/constants';

export class UserService {
	//TODO - fix any type, have a look at EACH service here
	static async createUserProfile(uid: string, userInfo: Record<string, any>) {
		const userRef = doc(firestore, firebaseKey, uid);
		await setDoc(userRef, userInfo);
	}

	static listenUserProfile(uid: string, callback: (data: any) => void) {
		const userRef = doc(firestore, firebaseKey, uid);

		return onSnapshot(userRef, (doc) => {
			return doc.exists() ? callback(doc.data()) : callback(null);
		});
	}

	static async updateProfile(auth: Auth, values: IUserSettings) {
		try {
			const userDocRef = doc(firestore, 'users', auth.currentUser?.uid || '');

			await updateDoc(userDocRef, {
				username: values.username !== '' ? values.username : '',
				updatedAt: new Date().toISOString(),
			});
		} catch (error) {
			console.error('Error updating profile:', error);
		}
	}

	static async deleteProfile(user: User | null, userRef: any) {
		if (user) {
			try {
				await deleteUser(user);
				await deleteDoc(userRef);
			} catch (error) {
				console.error('Error deleting user:', error);
			}
		}
	}
}
