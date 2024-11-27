import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { firestore } from 'services/firebase.services';
import { firebaseKey } from 'utils/constants';

export class UserService {
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
}
